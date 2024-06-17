import { Meta } from '@storybook/react'

import { Button } from '@/components/button'
import { Dialog } from '@/components/dialog'
import { useDialog } from '@/contexts/dialog-context'

export default {
  title: 'components/Dialog',
  component: Dialog,
} as Meta<typeof Dialog>

export const Default = () => {
  const { showDialog } = useDialog()

  const handleOpenDialog = () => {
    showDialog({
      title: 'Título',
      message: 'Mensagem',
      buttons: [
        {
          label: 'Cancelar',
          type: 'cancel',
        },
        {
          label: 'Ok',
          onClick: () => {
            console.log('Clicou em ok')
          },
        },
      ],
    })
  }

  return (
    <>
      <Button onClick={handleOpenDialog}>Abrir Dialog</Button>
      <Dialog />
    </>
  )
}
