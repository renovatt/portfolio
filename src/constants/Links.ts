import { FaLaptopCode } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'
import { HiHome, HiMiniUser } from 'react-icons/hi2'
import { BsFileEarmarkTextFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaProjectDiagram } from 'react-icons/fa'

export const PathLinks = [
  {
    href: '/home',
    text: 'Início',
    icon: HiHome,
  },
  {
    href: '/profile',
    text: 'Perfil',
    icon: HiMiniUser,
  },
  {
    href: '/projects',
    text: 'Projetos',
    icon: FaProjectDiagram,
  },
  {
    href: '/skills',
    text: 'Habilidades',
    icon: FaLaptopCode,
  },
  {
    href: '/contact',
    text: 'Contato',
    icon: MdOutlineEmail,
  },
]

export const SocialLinks = [
  {
    href: 'https://www.linkedin.com/in/renovatt',
    icon: FaLinkedin,
  },
  {
    href: 'https://github.com/renovatt',
    icon: FaGithub,
  },
  {
    href: '/willcode-cv.pdf',
    icon: BsFileEarmarkTextFill,
  },
]
