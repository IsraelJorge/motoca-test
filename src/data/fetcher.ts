import { getSearchParams } from '@/utils/getParams'

import { buildParams } from './buildParams'
import { buildUrl } from './buildUrl'
import { SchemaValidationError } from './errors/SchemaValidationError'
import {
  Data,
  Method,
  RequestSchema,
  ResponseSchema,
  Fetcher,
  MutationAPI,
  ZodOutput,
  QueryAPI,
} from './types'

const baseUrl = import.meta.env.VITE_API_BASE_URL

export const fetcher = async <
  M extends Method,
  ResSchema extends ResponseSchema,
  ReqSchema extends RequestSchema,
  D extends Data,
>(
  options: Fetcher<M, ResSchema, ReqSchema, D>,
  token?: string,
): Promise<ZodOutput<ResSchema>> => {
  try {
    let data: Data | FormData | undefined
    let url = options.url
    let params

    if (
      options.method === 'POST' ||
      options.method === 'PUT' ||
      options.method === 'PATCH'
    ) {
      const mutate = options as MutationAPI<M, ResSchema, ReqSchema, D>

      const result = mutate.requestSchema.safeParse(mutate.data)

      if (!result.success) {
        return Promise.reject(new SchemaValidationError(result.error, options))
      }

      data = result
      url = buildUrl(options.url, mutate.params)
    } else {
      const query = options as QueryAPI<M, ResSchema>

      url = buildUrl(options.url, query.params)
      params = buildParams(query.searchParams ?? {})
      const searchParams = getSearchParams(params)
      url = `${url}${searchParams}`
    }

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    if (token) {
      Object.assign(headers, {
        Authorization: `Bearer ${token}`,
      })
    }

    const requestDefaultOptions: RequestInit = {
      method: options.method,
      headers: headers,
      body: JSON.stringify(data),
    }

    const response = await fetch(baseUrl + url, {
      ...requestDefaultOptions,
      ...options.optionsFetch,
    })

    if (!response.ok) {
      const json = await response.json()
      throw new Error(json.message)
    }

    if (options.responseSchema) {
      const json = await response.json()

      if (!response.ok) {
        throw new Error(json.message)
      }

      const result = options.responseSchema.safeParse(json)

      if (!result.success) {
        return Promise.reject(new SchemaValidationError(result.error, options))
      }

      return result
    }

    return Promise.resolve(undefined)
  } catch (error) {
    return Promise.reject(error)
  }
}
