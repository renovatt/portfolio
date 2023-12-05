'use client'
import Link from 'next/link'
import { RouteLinksProps } from '@types'
import { usePathname } from 'next/navigation'

const RouteLinks = ({ href, icon: Icon }: RouteLinksProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      className={`relative transition-all ease-in hover:text-primary-950 ${
        isActive ? 'text-primary-950' : 'text-primary-750'
      }`}
      href={href}
    >
      <Icon className="h-6 w-6" />
    </Link>
  )
}

export default RouteLinks
