import { Meta } from '@storybook/react'

import { Input, InputProps } from '@/components/input'

export default {
  title: 'components/Input',
  args: {
    name: 'name',
    placeholder: 'Nome',
    label: 'Nome',
  },
  argTypes: {
    name: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    noMargin: {
      control: 'boolean',
    },
  },
  component: Input,
} as Meta<typeof Input>

export const Default = (args: InputProps) => <Input {...args} label="" />

export const WithLabel = (args: InputProps) => <Input {...args} />

export const WithError = (args: InputProps) => (
  <Input {...args} label="Nome">
    <Input.Error message="Campo obrigatório" />
  </Input>
)
