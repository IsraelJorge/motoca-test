import type { Preview } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

import { DialogProvider } from '@/contexts/dialog-context'

import '@/styles/global.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <DialogProvider>
        <Story />
      </DialogProvider>
    ),
    withRouter,
  ],
}

export default preview
