import Link from 'next/link'
import { RiMenu3Line } from 'react-icons/ri'
import { MenuMobileTypeProps } from '@/@types'

export const Navbar = ({ openModal }: MenuMobileTypeProps) => {
    return (
        <nav className='flex items-center justify-between'>
            <ul className='md:flex md:items-center md:justify-between hidden'>
                <li className='p-2 m-2'>
                    <Link
                        className='text-white font-bold text-xl transition-all ease-in hover:text-textPrimary'
                        href='/'
                    >
                        Página Inicial
                    </Link>
                </li>

                <li className='p-2 m-2'>
                    <Link
                        className='text-white font-bold text-xl transition-all ease-in hover:text-textPrimary'
                        href='/views/profile'
                    >
                        Quem sou eu
                    </Link>
                </li>

                <li className='p-2 m-2'>
                    <Link
                        className='text-white font-bold text-xl transition-all ease-in hover:text-textPrimary'
                        href='/views/projects'
                    >
                        Projetos
                    </Link>
                </li>

                <li className='p-2 m-2'>
                    <Link
                        className='text-white font-bold text-xl transition-all ease-in hover:text-textPrimary'
                        href='/views/skills_softskills'
                    >
                        HardSkills & SoftSkills
                    </Link>
                </li>

                <li className='p-2 m-2'>
                    <Link
                        className='text-white font-bold text-xl transition-all ease-in hover:text-textPrimary'
                        href='/views/contact'
                    >
                        Contato
                    </Link>
                </li>
            </ul>

            <RiMenu3Line
                className='w-6 h-6 text-white cursor-pointer md:hidden hover:text-textPrimary transition-all ease-in'
                onClick={openModal}
            />
        </nav>
    )
}