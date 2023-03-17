import * as z from "zod"
import * as imports from "../null"
import { CompleteContract, RelatedContractModel } from "./index"

export const TentantModel = z.object({
  id: z.string(),
  name: z.string(),
  idNumber: z.string(),
  address: z.string(),
  phone: z.string(),
  dateBirth: z.date(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
})

export interface CompleteTentant extends z.infer<typeof TentantModel> {
  contracts: CompleteContract[]
}

/**
 * RelatedTentantModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTentantModel: z.ZodSchema<CompleteTentant> = z.lazy(() => TentantModel.extend({
  contracts: RelatedContractModel.array(),
}))
