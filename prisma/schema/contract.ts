import * as z from "zod"
import * as imports from "../null"
import { CompleteTentant, RelatedTentantModel, CompleteRoom, RelatedRoomModel } from "./index"

export const ContractModel = z.object({
  id: z.string(),
  starDate: z.date(),
  endDate: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  roomId: z.string(),
  tenantId: z.string(),
})

export interface CompleteContract extends z.infer<typeof ContractModel> {
  Tenant: CompleteTentant
  room: CompleteRoom
}

/**
 * RelatedContractModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedContractModel: z.ZodSchema<CompleteContract> = z.lazy(() => ContractModel.extend({
  Tenant: RelatedTentantModel,
  room: RelatedRoomModel,
}))
