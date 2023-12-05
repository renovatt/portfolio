'use client'
import Link from 'next/link'
import { RouteLinksProps } from '@types'
import { usePathname } from 'next/navigation'

const RouteLinks = ({ href, icon: Icon, text }: RouteLinksProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      className={`relative text-xs transition-all ease-in hover:text-primary-950 ${
        isActive ? 'text-primary-950' : 'text-primary-750'
      }`}
      href={href}
      aria-label={text}
    >
      <Icon className="h-8 w-8 md:h-6 md:w-6" />
    </Link>
  )
}

export default RouteLinks
