import { lazy, Suspense } from 'react'

import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

const fallback = (
  <div style={{ background: 'transparent', width: 24, height: 24 }} />
)

export type IconName = keyof typeof dynamicIconImports

export type IconProps = Omit<LucideProps, 'ref'> & {
  name: IconName
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name])

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  )
}
