import { Link } from 'react-router-dom'

import { Motorcycle } from '@/data/schemas/Motorcycle'
import { StatusMotorcycle } from '@/data/schemas/StatusMotorcycle'
import { PriceHelper } from '@/utils/PriceHelper'
import { Route } from '@/utils/ui/Route'

import { Button } from './button'
import { Icon } from './icon'
import { Badge, BadgeProps } from './ui/badge'

export type CardItemProps = {
  item: Motorcycle
}

type StatusMotorcycleMap<T> = {
  [key in StatusMotorcycle]: T
}

export const statusMap: StatusMotorcycleMap<string> = {
  in_stock: 'Em estoque',
  out_of_stock: 'Sem estoque',
  in_transit: 'Em trânsito',
}

export const variantMap: StatusMotorcycleMap<BadgeProps['variant']> = {
  in_stock: 'success',
  out_of_stock: 'destructive',
  in_transit: 'warning',
}

export function CardItem({ item }: CardItemProps) {
  const statusLabel = statusMap[item.status]
  const statusVariant = variantMap[item.status]

  return (
    <div className="flex flex-col flex-wrap items-start justify-start gap-5 rounded-md bg-foreground px-5 py-5 text-accent md:flex-row md:items-center lg:h-32 lg:gap-24 lg:pl-14 lg:pr-11">
      <div>
        <span className="text-lg font-medium text-primary">{item.code}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 text-base font-medium">
        <div className="flex items-center gap-3">
          <span className="align-middle text-lg font-semibold">
            {item.model}
          </span>
          <Badge variant={statusVariant}>{statusLabel}</Badge>
        </div>
        <span>Valor: {PriceHelper.formatCurrency(item.price)}</span>
        <span>Cor: {item.color}</span>
      </div>
      <div className="flex items-center">
        <Button size="icon" variant="link" className="text-destructive">
          <Icon name="trash" size={18} />
        </Button>
        <Button size="icon" variant="link" asChild>
          <Link to={Route.motorcycleEdit(item.id)}>
            <Icon name="eye" size={18} />
          </Link>
        </Button>
      </div>
    </div>
  )
}
