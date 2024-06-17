import { Meta } from '@storybook/react'

import { Header } from '@/components/header'

export default {
  title: 'components/Header',
  component: Header,
} as Meta<typeof Header>

export const Default = () => <Header />
