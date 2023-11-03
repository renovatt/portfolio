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
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex items-center text-white"
        href="https://www.linkedin.com/in/renovatt"
        target="_blank"
      >
        <FaLinkedin className="m-1 h-8 w-8 text-white transition-all ease-in hover:-mt-1 hover:text-textPrimary" />
      </Link>

      <Link
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex items-center text-white"
        href="https://github.com/renovatt"
        target="_blank"
      >
        <FaGithub className="m-1 h-8 w-8 text-white transition-all ease-in hover:-mt-1 hover:text-textPrimary" />
      </Link>

      <Link
        data-aos="fade-up"
        data-aos-delay="600"
        className="flex items-center text-white"
        href={cv}
        target="_blank"
      >
        <BsFileEarmarkTextFill className="m-1 h-8 w-8 text-white transition-all ease-in hover:-mt-1 hover:text-textPrimary" />
      </Link>
    </span>
  )
}

export default HomeLinks
