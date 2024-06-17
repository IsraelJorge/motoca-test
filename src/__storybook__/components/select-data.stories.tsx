import { Meta } from '@storybook/react'

import { Form } from '@/components/form'
import { SelectData } from '@/components/select-data'
import { MotorcycleFormSchema } from '@/data/schemas/Motorcycle'

export default {
  title: 'components/SelectData',
  component: SelectData,
} as Meta<typeof SelectData>

const selectFruitOptions = [
  { id: '1', name: 'Laranja' },
  { id: '2', name: 'Vermelho' },
  { id: '3', name: 'Branca' },
]

const SelectTemplate = ({ children }: { children?: React.ReactElement }) => {
  return (
    <Form schema={MotorcycleFormSchema}>
      {({ control }) => {
        return (
          <SelectData
            data={selectFruitOptions}
            name="status"
            label="Cor"
            displayKey="name"
            control={control}
          >
            {children}
          </SelectData>
        )
      }}
    </Form>
  )
}

export const Default = () => <SelectTemplate />

export const WithError = {
  render: () => (
    <SelectTemplate>
      <SelectData.Error message="Error message" />
    </SelectTemplate>
  ),
}
