import { z } from 'zod'

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type ResponseSchema = z.ZodTypeAny
export type RequestSchema = z.ZodTypeAny
export type Schema = z.ZodTypeAny
export type Data = Record<string, unknown>
export type ZodOutput<R extends RequestSchema> = z.output<R>

export type QueryOptions<M extends Method, S extends Schema> = {
  url: string
  method: M
  responseSchema?: S
  optionsFetch?: RequestInit
  responseType?: ResponseType
}

export type MutationOptions<
  M extends Method,
  ResSchema extends ResponseSchema,
  ReqSchema extends RequestSchema,
> = QueryOptions<M, ResSchema> & {
  requestSchema: ReqSchema
  isFormData?: boolean
  transform?: (data: ZodOutput<ReqSchema>) => Data
}

export type QueryAPI<
  M extends Method,
  ResSchema extends RequestSchema,
> = QueryOptions<M, ResSchema> & {
  params?: string | Array<string>
  searchParams?: Params
}

export type MutationAPI<
  M extends Method,
  ResSchema extends ResponseSchema,
  ReqSchema extends RequestSchema,
  D extends Data,
> = MutationOptions<M, ResSchema, ReqSchema> & {
  request?: Request
  data?: D
  params?: string | Array<string>
  formData?: FormData
}

export type QueryArgs = {
  params?: Params | string
  searchParams?: Params
  url?: string
}

export type MutationArgs<D extends Data> = {
  params?: Params | string
  request?: Request
  data?: D
  formData?: FormData
}

export type QueryFetch<M extends Method, ResSchema extends RequestSchema> = (
  args?: QueryArgs,
) => QueryAPI<M, ResSchema>

export type MutationFetch<
  M extends Method,
  ResSchema extends ResponseSchema,
  ReqSchema extends RequestSchema,
  D extends Data,
> = (args: Partial<MutationArgs<D>>) => MutationAPI<M, ResSchema, ReqSchema, D>

export type Fetcher<
  M extends Method,
  ResSchema extends ResponseSchema,
  ReqSchema extends RequestSchema,
  D extends Data,
> = QueryAPI<M, ResSchema> | MutationAPI<M, ResSchema, ReqSchema, D>

export type Params = Record<string, string>
export type QueryParams = string | Array<string> | Params
