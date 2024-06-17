import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 align-middle text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'hover:bg-primary/80 border-transparent bg-primary text-primary-foreground shadow',
        secondary:
          'hover:bg-secondary/80 border-transparent bg-secondary text-secondary-foreground',
        destructive:
          'hover:bg-destructive/80 border-transparent bg-destructive-foreground text-destructive',
        outline: 'text-foreground',
        success:
          'hover:bg-success/80 border-transparent bg-success-foreground text-success',
        warning:
          'hover:bg-warning/80 border-transparent bg-warning-foreground text-warning',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }