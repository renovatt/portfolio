import Link from 'next/link'
import { SocialLinks } from '@constants/Links'

const HomeLinks = () => {
  return (
    <span className="flex items-center justify-center gap-1 transition-all">
      {SocialLinks.map(({ href, icon: Icon }, index) => (
        <Link
          key={index}
          className="animate__animated animate__fadeInDown flex items-center text-primary-750"
          href={href}
          target="_blank"
        >
          <Icon className="m-1 h-5 w-5 text-primary-750 transition-all ease-in hover:-mt-1 hover:text-primary-950" />
        </Link>
      ))}
    </span>
  )
}

export default HomeLinks
