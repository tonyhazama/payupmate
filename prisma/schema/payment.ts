import * as z from "zod"
import * as imports from "../null"

export const PaymentModel = z.object({
  id: z.string(),
  amount: z.number(),
  type: z.string(),
  description: z.string(),
  roomId: z.string().nullish(),
  tenantId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
