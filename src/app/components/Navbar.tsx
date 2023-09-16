import RouteLinks from './RouteLinks'
import { RiMenu3Line } from 'react-icons/ri'
import { MenuMobileTypeProps } from '@/@types'

const Navbar = ({ openModal }: MenuMobileTypeProps) => {
  return (
    <nav className="flex items-center justify-between overflow-x-hidden">
      <ul className="hidden md:flex md:items-center md:justify-between">
        <li data-aos="fade-left" data-aos-delay="100" className="m-2 p-2">
          <RouteLinks href="/" text="Página inicial" />
        </li>

        <li data-aos="fade-left" data-aos-delay="200" className="m-2 p-2">
          <RouteLinks href="/views/profile" text="Quem sou eu" />
        </li>

        <li data-aos="fade-left" data-aos-delay="300" className="m-2 p-2">
          <RouteLinks href="/views/projects" text="Projetos" />
        </li>

        <li data-aos="fade-left" data-aos-delay="400" className="m-2 p-2">
          <RouteLinks href="/views/skills_softskills" text="Habilidades" />
        </li>

        <li data-aos="fade-left" data-aos-delay="500" className="m-2 p-2">
          <RouteLinks href="/views/contact" text="Contato" />
        </li>
      </ul>

      <RiMenu3Line
        className="h-6 w-6 cursor-pointer text-white transition-all ease-in hover:text-textPrimary md:hidden"
        onClick={openModal}
      />
    </nav>
  )
}

export default Navbar
