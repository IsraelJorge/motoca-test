import { Container } from '@/components/layouts/container'
import { Separator } from '@/components/ui/separator'

import { MotorcycleForm } from './components/motorcycle-form'

export function MotorcycleNew() {
  return (
    <Container>
      <h1>Registro de Motos</h1>
      <div className="mb-16 pt-5">
        <Separator />
      </div>

      <h2 className="mb-9 text-center align-middle text-2xl font-semibold">
        Preencha as informações a baixo para registrar uma Moto 🏍️
      </h2>

      <MotorcycleForm />
    </Container>
  )
}
