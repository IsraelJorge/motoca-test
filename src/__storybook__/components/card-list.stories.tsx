import { Meta } from '@storybook/react'

import { CardList } from '@/components/card-list'
import { Motorcycle } from '@/data/schemas/Motorcycle'

export default {
  title: 'components/CardList',
  component: CardList,
} as Meta<typeof CardList>

const motorcycles: Motorcycle[] = [
  {
    id: '1',
    code: 'MTR-001',
    model: 'Ninja 250',
    price: 10000,
    color: 'Vermelha',
    status: 'in_stock',
  },
  {
    id: '2',
    code: 'MTR-002',
    model: 'Ninja 300',
    price: 20000,
    color: 'Azul',
    status: 'out_of_stock',
  },
  {
    id: '3',
    code: 'MTR-003',
    model: 'Ninja 400',
    price: 30000,
    color: 'Verde',
    status: 'in_transit',
  },
]

export const Default = () => (
  <div className="min-h-screen">
    <CardList motorcycles={motorcycles} />
  </div>
)
