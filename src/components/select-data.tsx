import { ComponentPropsWithoutRef } from 'react'

import { Control, Controller } from 'react-hook-form'

import {
  Select as SelectContainer,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import {
  ChildrenError,
  checkChildrenHasError,
} from '@/utils/checkChildrenHasError'

export type SelectDataProps<
  Data extends Record<string, unknown>,
  DisplayKey = keyof Data,
  ValueKey = keyof Data,
> = {
  data: Data[]
  label: string
  name: string
  control: Control<any>
  displayKey: DisplayKey
  valueKey?: ValueKey
  defaultValue?: string
  noMargin?: boolean
} & ComponentPropsWithoutRef<typeof SelectTrigger>

function SelectRoot<Data extends Record<string, unknown>>({
  children,
  className,
  noMargin,
  control,
  name,
  defaultValue,
  displayKey,
  valueKey = 'id',
  data,
  label,
  disabled,
  ...rest
}: SelectDataProps<Data>) {
  const hasError = checkChildrenHasError(children as ChildrenError)

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field: { onChange, value } }) => {
        return (
          <div
            className={cn('relative', className, {
              'pb-5': !noMargin,
            })}
          >
            <div
              className={cn('select-root relative', {
                'select-error': hasError,
              })}
            >
              <SelectContainer
                onValueChange={onChange}
                disabled={disabled}
                value={value}
              >
                <SelectTrigger {...rest}>
                  <span className="label-custom absolute block bg-background text-sm transition-all">
                    {label}
                  </span>

                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {data.map((item) => {
                      const value = String(item[valueKey])
                      const label = String(item[displayKey])

                      return (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      )
                    })}
                  </SelectGroup>
                </SelectContent>
              </SelectContainer>
            </div>
            {children}
          </div>
        )
      }}
    />
  )
}

export type SelectErrorProps = React.ComponentProps<'span'> & {
  message?: string
}

const SelectError = ({ message, className, ...props }: SelectErrorProps) => {
  if (!message) return null

  return (
    <span
      className={cn('absolute bottom-0 text-xs text-destructive', className)}
      {...props}
    >
      {message}
    </span>
  )
}

export const SelectData = Object.assign(SelectRoot, { Error: SelectError })
