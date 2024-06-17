import { Meta } from '@storybook/react'

import { Icon, IconName, IconProps } from '@/components/icon'

const iconsName: IconName[] = [
  'a-arrow-down',
  'accessibility',
  'heart',
  'a-arrow-up',
]

export default {
  title: 'components/Icon',
  component: Icon,
  args: {
    name: 'a-arrow-down',
  },
  argTypes: {
    name: {
      control: 'select',
      options: iconsName,
    },
  },
} as Meta<typeof Icon>

export const Default = (args: IconProps) => <Icon {...args} />
