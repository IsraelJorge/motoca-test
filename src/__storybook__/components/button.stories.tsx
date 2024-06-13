import { Meta } from '@storybook/react'

import { Button } from '@/components/button'

export default {
  title: 'components/Button',
  component: Button,
} as Meta<typeof Button>

export const Default = () => <Button>Click</Button>
