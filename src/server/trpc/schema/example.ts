import * as z from "zod"
import * as imports from "../../../../prisma/null"

export const ExampleModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
