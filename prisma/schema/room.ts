import * as z from "zod"
import * as imports from "../null"
import { CompleteContract, RelatedContractModel } from "./index"

export const RoomModel = z.object({
  id: z.string(),
  name: z.string(),
  number: z.string(),
  price: z.number(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteRoom extends z.infer<typeof RoomModel> {
  contracts: CompleteContract[]
}

/**
 * RelatedRoomModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRoomModel: z.ZodSchema<CompleteRoom> = z.lazy(() => RoomModel.extend({
  contracts: RelatedContractModel.array(),
}))
