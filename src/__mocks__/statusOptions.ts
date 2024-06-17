import { StatusMotorcycle } from '@/data/schemas/StatusMotorcycle'

type StatusOptions = {
  value: StatusMotorcycle
  label: string
}

export const statusOptions: StatusOptions[] = [
  {
    value: 'in_stock',
    label: 'Em estoque',
  },
  {
    value: 'out_of_stock',
    label: 'Sem estoque',
  },
  {
    value: 'in_transit',
    label: 'Em trânsito',
  },
]
