import { FaLaptopCode } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'
import { HiHome, HiMiniUser } from 'react-icons/hi2'
import { BsFileEarmarkTextFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaProjectDiagram } from 'react-icons/fa'

export const PathLinks = [
  {
    path: '/home',
    text: 'Início',
    icon: HiHome,
  },
  {
    path: '/profile',
    text: 'Perfil',
    icon: HiMiniUser,
  },
  {
    path: '/projects',
    text: 'Projetos',
    icon: FaProjectDiagram,
  },
  {
    path: '/skills',
    text: 'Habilidades',
    icon: FaLaptopCode,
  },
  {
    path: '/contact',
    text: 'Contato',
    icon: MdOutlineEmail,
  },
]

export const SocialLinks = [
  {
    path: 'https://www.linkedin.com/in/renovatt',
    icon: FaLinkedin,
  },
  {
    path: 'https://github.com/renovatt',
    icon: FaGithub,
  },
  {
    path: '/willcode-cv.pdf',
    icon: BsFileEarmarkTextFill,
  },
]
