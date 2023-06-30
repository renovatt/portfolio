'use client'

import React from 'react'
import Link from 'next/link'
import { RiCloseFill } from 'react-icons/ri'
import { MenuMobileTypeProps } from '@/@types'

export const NavbarMobile = ({ modal, closeModal }: MenuMobileTypeProps) => {
    React.useEffect(() => {
        document.body.style.overflowY = modal ? 'hidden' : 'auto'
    }, [modal])

    return (
        <>
            {modal && (
                <nav className={`flex absolute top-0 left-0 z-50 w-screen h-screen items-center justify-center transition-all ease-in bg-backgroundShadow bg-gradient-to-b from-transparent to-pink-500 backdrop-blur-sm ${modal ? 'flex animate-mobileActive' : 'mobileInactive'}`} >
                    <ul className='flex items-center justify-center flex-col transform transition-all gap-8'>
                        <li className='p-2 m-2 hover:scale-105 w-screen text-center transition-all hover:bg-backgroundShadow'>
                            <Link
                                className='text-white font-bold text-3xl transition-all ease-in'
                                onClick={closeModal}
                                href='/'
                            >
                                Página Inicial
                            </Link>
                        </li>

                        <li className='p-2 m-2 hover:scale-105 w-screen text-center transition-all hover:bg-backgroundShadow'>
                            <Link
                                className='text-white font-bold text-3xl transition-all ease-in'
                                onClick={closeModal}
                                href='/views/profile'
                            >
                                Quem sou eu
                            </Link>
                        </li>

                        <li className='p-2 m-2 hover:scale-105 w-screen text-center transition-all hover:bg-backgroundShadow'>
                            <Link
                                className='text-white font-bold text-3xl transition-all ease-in'
                                onClick={closeModal}
                                href='/views/projects'
                            >
                                Projetos
                            </Link>
                        </li>

                        <li className='p-2 m-2 hover:scale-105 w-screen text-center transition-all hover:bg-backgroundShadow'>
                            <Link
                                className='text-white font-bold text-3xl transition-all ease-in'
                                onClick={closeModal}
                                href='/views/skills_softskills'
                            >
                                HardSkills & SoftSkills
                            </Link>
                        </li>

                        <li className='p-2 m-2 hover:scale-105 w-screen text-center transition-all hover:bg-backgroundShadow'>
                            <Link
                                className='text-white font-bold text-3xl transition-all ease-in'
                                onClick={closeModal}
                                href='/views/contact'
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>

                    <RiCloseFill
                        className='absolute top-8 right-8 w-8 h-8 text-white cursor-pointer hover:text-textPrimary transition-all ease-in'
                        onClick={closeModal}
                    />
                </nav >
            )}
        </>
    )
}