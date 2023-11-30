import Link from 'next/link'
import { BsFileEarmarkTextFill } from 'react-icons/bs'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const HomeLinks = () => {
  const cv = '/willcode-cv.pdf'
  return (
    <span
      className="absolute -bottom-11 mt-4 flex items-center justify-center transition-all
     md:left-0"
    >
      <Link
        className="animate__animated animate__fadeInUp flex items-center text-primary-750"
        href="https://www.linkedin.com/in/renovatt"
        target="_blank"
      >
        <FaLinkedin className="m-1 h-8 w-8 text-primary-750 transition-all ease-in hover:-mt-1 hover:text-primary-950" />
      </Link>

      <Link
        className="animate__animated animate__fadeInUp flex items-center text-primary-750"
        href="https://github.com/renovatt"
        target="_blank"
      >
        <FaGithub className="m-1 h-8 w-8 text-primary-750 transition-all ease-in hover:-mt-1 hover:text-primary-950" />
      </Link>

      <Link
        className="animate__animated animate__fadeInUp flex items-center text-primary-750"
        href={cv}
        target="_blank"
      >
        <BsFileEarmarkTextFill className="m-1 h-8 w-8 text-primary-750 transition-all ease-in hover:-mt-1 hover:text-primary-950" />
      </Link>
    </span>
  )
}

export default HomeLinks
