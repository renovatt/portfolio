import Link from 'next/link'
import { RouteLinksProps } from '@types'
import { usePathname } from 'next/navigation'

const RouteLinks = (props: RouteLinksProps) => {
  const pathname = usePathname()
  const isActive = pathname === props.href
  return (
    <Link
      className={`${
        props.onClick ? 'text-2xl' : 'text-base'
      } font-bold transition-all ease-in hover:text-primary-950 ${
        isActive ? 'text-primary-950' : 'text-primary-750'
      }`}
      href={props.href}
      onClick={props.onClick}
    >
      {props.text}
    </Link>
  )
}

export default RouteLinks
