import z from "zod";

export const filterQuery = z.object({
  page: z.number().optional().default(0),
  size: z.number().optional().default(10),
});