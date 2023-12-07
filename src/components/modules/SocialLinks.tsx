import Link from 'next/link'
import { SocialLinks as Links } from 'mocks/Links'

const SocialLinks = () => {
  return (
    <span className="flex items-center justify-center gap-1 transition-all">
      {Links.map(({ path, icon: Icon }, index) => (
        <Link
          key={index}
          className="animate__animated animate__fadeInDown flex items-center text-750"
          href={path}
          target="_blank"
        >
          <Icon className="m-1 h-5 w-5 text-750 transition-all ease-in hover:-mt-1 hover:text-950" />
        </Link>
      ))}
    </span>
  )
}

export default SocialLinks
