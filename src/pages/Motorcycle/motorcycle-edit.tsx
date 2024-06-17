import { Container } from '@/components/layouts/container'
import { Separator } from '@/components/ui/separator'

import { MotorcycleForm } from './components/motorcycle-form'

export function MotorcycleEdit() {
  return (
    <div>
      <Container>
        <h1>Editar</h1>
        <div className="mb-16 pt-5">
          <Separator />
        </div>

        <h2 className="mb-9 text-center align-middle text-2xl font-semibold">
          Edite as informações que preferir! 📝
        </h2>

        <MotorcycleForm type="update" />
      </Container>
    </div>
  )
}
