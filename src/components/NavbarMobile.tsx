'use client'

import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { MenuMobileTypeProps } from '@/@types'
import { RouteLinks } from './RouteLinks'

export const NavbarMobile = ({ modal, closeModal }: MenuMobileTypeProps) => {
    React.useEffect(() => {
        document.body.style.overflowY = modal ? 'hidden' : 'auto'
    }, [modal])

    return (
        <>
            {modal && (
                <nav className={`flex absolute top-0 left-0 z-50 w-screen h-screen items-center justify-center transition-all ease-in bg-backgroundShadow bg-gradient-to-b from-transparent to-pink-500 backdrop-blur-sm ${modal ? 'flex animate-mobileActive' : 'mobileInactive'}`} >
                    <ul className='flex items-center justify-center flex-col transform transition-all gap-8 overflow-hidden w-full'>
                        <li className='p-2 m-2 hover:scale-105 w-full text-center transition-all hover:bg-backgroundShadow'>
                            <RouteLinks
                                href='/'
                                text='Página inicial'
                                onClick={closeModal}
                            />
                        </li>

                        <li className='p-2 m-2 hover:scale-105 w-full text-center transition-all hover:bg-backgroundShadow'>
                            <RouteLinks
                                href='/views/profile'
                                text='Quem sou eu'
                                onClick={closeModal}
                            />
                        </li>

                        <li className='p-2 m-2 hover:scale-105 w-full text-center transition-all hover:bg-backgroundShadow'>
                            <RouteLinks
                                href='/views/projects'
                                text='Projetos'
                                onClick={closeModal}
                            />
                        </li>

                        <li className='p-2 m-2 hover:scale-105 w-full text-center transition-all hover:bg-backgroundShadow'>
                            <RouteLinks
                                href='/views/skills_softskills'
                                text='HardSkills & SoftSkills'
                                onClick={closeModal}
                            />
                        </li>

                        <li className='p-2 m-2 hover:scale-105 w-full text-center transition-all hover:bg-backgroundShadow'>
                            <RouteLinks
                                href='/views/contact'
                                text='Contato'
                                onClick={closeModal}
                            />
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