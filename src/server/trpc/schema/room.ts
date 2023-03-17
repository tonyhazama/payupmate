import * as z from "zod";
// eslint-disable-next-line import/no-cycle
import { CompleteContract, RelatedContractModel } from "./index";

export const RoomModel = z.object({
  id: z.string().nullish(),
  name: z.string(),
  number: z.string(),
  price: z.number().int(),
  description: z.string(),
});

export const CreateRoomModel = z.object({
  name: z.string(),
  number: z.string(),
  price: z.number().int(),
  description: z.string(),
});

export interface CompleteRoom extends z.infer<typeof RoomModel> {
  contracts?: CompleteContract | null;
}

/**
 * RelatedRoomModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRoomModel: z.ZodSchema<CompleteRoom> = z.lazy(() =>
  RoomModel.extend({
    contracts: RelatedContractModel.nullish(),
  })
);
