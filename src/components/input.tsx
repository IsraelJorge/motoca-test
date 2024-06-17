import * as React from 'react'

import { cn } from '@/lib/utils'
import {
  ChildrenError,
  checkChildrenHasError,
} from '@/utils/checkChildrenHasError'
import { Mask } from '@/utils/Mask'

import { Icon } from './icon'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  noMargin?: boolean
  label?: string
  mask?: 'currency'
  icon?: React.ReactElement<typeof Icon>
}

const InputRoot = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      children,
      noMargin,
      name,
      label,
      placeholder,
      onChange,
      mask,
      icon,
      ...props
    },
    ref,
  ) => {
    const hasError = checkChildrenHasError(children as ChildrenError)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = handleMask(e.target.value)
      e.target.value = value
      onChange?.(e)
    }

    const handleMask = (value: string) => {
      switch (mask) {
        case 'currency':
          return Mask.currency(value)
        default:
          return value
      }
    }

    return (
      <div
        className={cn('input-root', className, {
          'input-error': hasError,
          'pb-5': !noMargin,
        })}
      >
        <div className="relative text-sm">
          {!!icon && (
            <div className="absolute top-1/2 -translate-y-1/2 px-2">{icon}</div>
          )}
          <input
            type={type}
            className={cn(
              'flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              {
                'pl-8': !!icon,
              },
            )}
            placeholder={label ? '' : placeholder}
            name={name}
            id={name}
            ref={ref}
            onChange={handleChange}
            {...props}
          />
          <label
            htmlFor={name}
            className="text-base-300/50 absolute top-1/2 mx-3 -translate-y-1/2 bg-background px-1 font-normal transition-all"
          >
            {label}
          </label>
        </div>
        {children}
      </div>
    )
  },
)
InputRoot.displayName = 'InputRoot'

export type InputErrorProps = React.ComponentProps<'span'> & {
  message?: string
}

const InputError = ({ message, className, ...props }: InputErrorProps) => {
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

export const Input = Object.assign(InputRoot, { Error: InputError })
