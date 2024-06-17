import { Link } from 'react-router-dom'

import { Button } from '@/components/button'
import { CardList } from '@/components/card-list'
import { Icon } from '@/components/icon'
import { Input } from '@/components/input'
import { Container } from '@/components/layouts/container'
import { Separator } from '@/components/ui/separator'
import { Motorcycle } from '@/data/schemas/Motorcycle'
import { Route } from '@/utils/ui/Route'

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

export function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-0">
        <h1>Tabela de Motos</h1>
        <div className="flex flex-wrap items-center gap-3">
          <Input
            placeholder="Buscar por código, nome e cor"
            className="w-full md:w-auto"
            noMargin
            icon={<Icon name="search" size={18} />}
          />
          <Button className="w-full md:w-auto" asChild>
            <Link to={Route.motorcycleNew}>
              <Icon name="plus" size={18} />
              <span>Novo Registro</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="pb-6 pt-5">
        <Separator />
      </div>
      {motorcycles.length > 0 ? (
        <CardList motorcycles={motorcycles} />
      ) : (
        <p>Nenhum registro encontrado</p>
      )}
    </Container>
  )
}
