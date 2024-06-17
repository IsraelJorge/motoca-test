import { Meta } from '@storybook/react'

import { Badge, BadgeProps } from '@/components/ui/badge'

const variants: BadgeProps['variant'][] = [
  'default',
  'secondary',
  'destructive',
  'outline',
  'success',
  'warning',
]

export default {
  title: 'components/Badge',
  component: Badge,
  args: {
    children: 'Badge',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
  },
} as Meta<typeof Badge>

export const Default = (args: BadgeProps) => <Badge {...args} />
