import { statusOptions } from '@/__mocks__/statusOptions'
import { Button } from '@/components/button'
import { Form } from '@/components/form'
import { Icon } from '@/components/icon'
import { Input } from '@/components/input'
import { SelectData } from '@/components/select-data'
import { MotorcycleFormSchema } from '@/data/schemas/Motorcycle'

type MotorcycleFormProps = {
  type?: 'create' | 'update'
}

export function MotorcycleForm({ type = 'create' }: MotorcycleFormProps) {
  const isCreate = type === 'create'

  return (
    <Form schema={MotorcycleFormSchema}>
      {({ register, control, formState: { errors } }) => {
        return (
          <section className="mx-auto flex max-w-[26rem] flex-col gap-2">
            <Input label="Código" disabled={!isCreate} {...register('code')}>
              <Input.Error message={errors.code?.message} />
            </Input>
            <Input label="Modelo da Moto" {...register('model')}>
              <Input.Error message={errors.model?.message} />
            </Input>
            <Input label="Cor" {...register('color')}>
              <Input.Error message={errors.color?.message} />
            </Input>
            <Input label="Valor" mask="currency" {...register('price')}>
              <Input.Error message={errors.price?.message} />
            </Input>
            <SelectData
              label="Status"
              data={statusOptions}
              name="status"
              displayKey="label"
              valueKey="value"
              control={control}
            >
              <SelectData.Error message={errors.status?.message} />
            </SelectData>

            <Button type="submit" size="lg">
              <Icon name={isCreate ? 'plus' : 'upload'} size={18} />
              <span>{isCreate ? 'Registrar' : 'Atualizar'}</span>
            </Button>
          </section>
        )
      }}
    </Form>
  )
}
