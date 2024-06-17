import { z } from 'zod'

import { StatusMotorcycleSchema } from './StatusMotorcycle'

export const MotorcycleSchema = z.object({
  id: z.string(),
  code: z.string(),
  model: z.string(),
  price: z.number(),
  color: z.string(),
  status: StatusMotorcycleSchema,
})

export const MotorcycleFormSchema = z.object({
  code: z.string(),
  model: z.string(),
  price: z.number().int().min(0),
  color: z.string(),
  status: StatusMotorcycleSchema,
})

export type Motorcycle = z.infer<typeof MotorcycleSchema>
export type MotorcycleForm = z.infer<typeof MotorcycleFormSchema>
