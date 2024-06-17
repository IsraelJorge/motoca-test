import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type As = 'div' | 'section' | 'article' | 'main' | 'header' | 'footer'

export function Container({
  children,
  className,
  as = 'div',
  ...rest
}: ComponentProps<'div'> & { as?: As }) {
  const Component = as

  return (
    <Component
      className={cn('mx-auto w-full max-w-screen-2xl px-5 pb-3', className)}
      {...rest}
    >
      {children}
    </Component>
  )
}
