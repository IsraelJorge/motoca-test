import { Link } from 'react-router-dom'

import { Route } from '@/utils/ui/Route'

import { Button } from './button'
import { Icon } from './icon'
import { Container } from './layouts/container'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function Header() {
  return (
    <Container as="header" className="pb-10 pt-6">
      <div className="flex items-center justify-end gap-1">
        <Button variant="link" size="icon" className="relative" asChild>
          <Link to={Route.home}>
            <Icon name="home" className="size-8 fill-muted" />
            <div className="absolute bottom-0.5 h-3 w-2 rounded-t-[2px] bg-background" />
          </Link>
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/IsraelJorge.png" />
          <AvatarFallback>IJ</AvatarFallback>
        </Avatar>
      </div>
    </Container>
  )
}
