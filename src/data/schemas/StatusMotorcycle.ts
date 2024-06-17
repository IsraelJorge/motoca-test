import { z } from 'zod'

export const StatusMotorcycleSchema = z.enum([
  'in_stock',
  'out_of_stock',
  'in_transit',
])

export type StatusMotorcycle = z.infer<typeof StatusMotorcycleSchema>
