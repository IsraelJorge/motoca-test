import { Motorcycle } from '@/data/schemas/Motorcycle'

import { CardItem } from './card-item'

export type CardListProps = {
  motorcycles: Motorcycle[]
}

export function CardList({ motorcycles }: CardListProps) {
  return (
    <div className="flex flex-col gap-6">
      {motorcycles.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  )
}
