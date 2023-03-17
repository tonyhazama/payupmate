import { z } from "zod";
import { CreateRoomModel, filterQuery, RoomModel } from "../schema";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { DateTime } from "luxon";

export const roomRouter = router({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.room.findMany();
  }),
  getRooms: protectedProcedure
    .input(filterQuery)
    .query(async ({ ctx, input: { page, size } }) => {
      const now = DateTime.now().toISO();
      const take = size;
      const skip = page * size;

      const filled: number = await ctx.prisma.room.count({
        where: {
          contracts: {
            some: {
              AND: {
                endDate: { gt: now },
                starDate: { lt: now },
              },
            },
          },
        },
      });
      const booked: number = await ctx.prisma.room.count({
        where: {
          contracts: {
            some: {
              AND: {
                starDate: { gt: now },
              },
            },
          },
        },
      });
      const total: number = await ctx.prisma.room.count({});
      const empty = total - filled;
      const data = await ctx.prisma.room.findMany({
        take,
        skip,
        orderBy: [{ createdAt: "desc" }],
        include: {
          contracts: {
            include: { Tenant: {} },
            where: { endDate: { gt: now } },
          },
        },
      });
      return {
        data: data,
        error: false,
        pagination: {
          size: size,
          page,
          total,
          totalPage: Math.ceil(total / size),
        },
        summary: {
          total,
          filled,
          empty,
          booked,
        },
      };
    }),
  createRoom: protectedProcedure
    .input(CreateRoomModel)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.room.create({ data: input });
    }),
  updateRoom: protectedProcedure
    .input(RoomModel)
    .mutation(({ input: { id, ...newData }, ctx }) => {
      return ctx.prisma.room.update({
        where: { id: `${id}` },
        data: newData,
      });
    }),
  deleteRoom: protectedProcedure
    .input(z.string())
    .mutation(({ input, ctx }) => {
      return ctx.prisma.room.delete({
        where: { id: input },
      });
    }),
  // getRooms: publicProcedure.input(filterQuery).query(({ input }) => getRoomsHandler({ filterQuery: input }))
  // getRooms2: publicProcedure.input
});
