import { z } from 'zod'

export class SchemaValidationError extends Error {
  error!: z.ZodError
  extra: Record<string, unknown>

  constructor(error: z.ZodError, options: Record<string, unknown>) {
    super(error.message)
    this.error = error
    this.extra = options
  }
}
