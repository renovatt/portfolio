'use client'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { usePathname } from 'next/navigation'

export type RouteLinksProps = {
  text: string
  path: string
  icon: IconType
}

const RouteLink = ({ path, icon: Icon, text }: RouteLinksProps) => {
  const pathname = usePathname()
  const isActive = pathname === path
  return (
    <Link
      className={`relative text-xs transition-all ease-in hover:text-950 ${
        isActive ? 'text-950' : 'text-750'
      }`}
      href={path}
      aria-label={text}
    >
      <Icon className="h-8 w-8 md:h-6 md:w-6" />
    </Link>
  )
}

export default RouteLink
