import RouteLinks from './RouteLinks'
import { RiMenu3Line } from 'react-icons/ri'
import { MenuMobileTypeProps } from '@/@types'

const Navbar = ({ openModal }: MenuMobileTypeProps) => {
    return (
        <nav className='flex items-center justify-between'>
            <ul className='md:flex md:items-center md:justify-between hidden'>
                <li className='p-2 m-2'>
                    <RouteLinks
                        href='/'
                        text='Página inicial'
                    />
                </li>

                <li className='p-2 m-2'>
                    <RouteLinks
                        href='/views/profile'
                        text='Quem sou eu'
                    />
                </li>

                <li className='p-2 m-2'>
                    <RouteLinks
                        href='/views/projects'
                        text='Projetos'
                    />
                </li>

                <li className='p-2 m-2'>
                    <RouteLinks
                        href='/views/skills_softskills'
                        text='HardSkills & SoftSkills'
                    />
                </li>

                <li className='p-2 m-2'>
                    <RouteLinks
                        href='/views/contact'
                        text='Contato'
                    />
                </li>
            </ul>

            <RiMenu3Line
                className='w-6 h-6 text-white cursor-pointer md:hidden hover:text-textPrimary transition-all ease-in'
                onClick={openModal}
            />
        </nav>
    )
}

export default Navbar;