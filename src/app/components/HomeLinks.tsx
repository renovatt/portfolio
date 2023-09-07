import Link from 'next/link'
import { BsFileEarmarkTextFill } from 'react-icons/bs'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const HomeLinks = () => {
  const cv = '/willcode-cv.pdf'
  return (
    <span className='flex items-center justify-center mt-4 transition-all absolute -bottom-11
     md:left-0'>
      <Link
        data-aos="fade-up"
        data-aos-delay="200"
        className='flex items-center text-white'
        href="https://www.linkedin.com/in/renovatt" target="_blank">
        <FaLinkedin className='h-8 w-8 text-white hover:text-textPrimary transition-all ease-in m-1 hover:-mt-1' />
      </Link>

      <Link
        data-aos="fade-up"
        data-aos-delay="400"
        className='flex items-center text-white'
        href="https://github.com/renovatt" target="_blank">
        <FaGithub className='h-8 w-8 text-white hover:text-textPrimary transition-all ease-in m-1 hover:-mt-1' />
      </Link>

      <Link
        data-aos="fade-up"
        data-aos-delay="600"
        className='flex items-center text-white'
        href={cv} target="_blank">
        <BsFileEarmarkTextFill className='h-8 w-8 text-white hover:text-textPrimary transition-all ease-in m-1 hover:-mt-1' />
      </Link>
    </span>
  )
}

export default HomeLinks