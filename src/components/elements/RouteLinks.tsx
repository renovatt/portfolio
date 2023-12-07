'use client'
import Link from 'next/link'
import { RouteLinksProps } from '@types'
import { usePathname } from 'next/navigation'

const RouteLinks = ({ path, icon: Icon, text }: RouteLinksProps) => {
  const pathname = usePathname()
  const isActive = pathname === path
  return (
    <Link
      className={`hover:text-950 relative text-xs transition-all ease-in ${
        isActive ? 'text-950' : 'text-750'
      }`}
      href={path}
      aria-label={text}
    >
      <Icon className="h-8 w-8 md:h-6 md:w-6" />
    </Link>
  )
}

export default RouteLinks
