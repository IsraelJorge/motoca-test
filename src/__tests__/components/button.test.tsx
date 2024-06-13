import { render, screen } from '@testing-library/react'

import { Button } from '@/components/button'

describe('<button />', () => {
  it('should render button', () => {
    render(<Button>Click me</Button>)

    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
