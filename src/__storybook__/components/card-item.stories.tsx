import { Meta } from '@storybook/react'

import { CardItem } from '@/components/card-item'
import { Motorcycle } from '@/data/schemas/Motorcycle'

export default {
  title: 'components/CardItem',
  component: CardItem,
} as Meta<typeof CardItem>

const item: Motorcycle = {
  id: '1',
  code: 'MTR-001',
  model: 'Ninja 250',
  price: 10000,
  color: 'Vermelha',
  status: 'in_stock',
}

export const Default = () => <CardItem item={item} />
