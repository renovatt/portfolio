'use client'

import React from 'react'
import RouteLinks from './RouteLinks'
import { RiCloseFill } from 'react-icons/ri'
import { MenuMobileTypeProps } from '@/@types'

const NavbarMobile = ({ modal, closeModal }: MenuMobileTypeProps) => {
  React.useEffect(() => {
    document.body.style.overflowY = modal ? 'hidden' : 'auto'
  }, [modal])

  return (
    <>
      {modal && (
        <nav
          className={`absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-backgroundShadow bg-gradient-to-b from-transparent to-pink-500 backdrop-blur-sm transition-all ease-in ${
            modal ? 'flex animate-mobileActive' : 'mobileInactive'
          }`}
        >
          <ul className="flex w-full transform flex-col items-center justify-center gap-8 overflow-hidden transition-all">
            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105 hover:bg-backgroundShadow">
              <RouteLinks href="/" text="Página inicial" onClick={closeModal} />
            </li>

            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105 hover:bg-backgroundShadow">
              <RouteLinks
                href="/views/profile"
                text="Quem sou eu"
                onClick={closeModal}
              />
            </li>

            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105 hover:bg-backgroundShadow">
              <RouteLinks
                href="/views/projects"
                text="Projetos"
                onClick={closeModal}
              />
            </li>

            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105 hover:bg-backgroundShadow">
              <RouteLinks
                href="/views/skills_softskills"
                text="HardSkills & SoftSkills"
                onClick={closeModal}
              />
            </li>

            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105 hover:bg-backgroundShadow">
              <RouteLinks
                href="/views/contact"
                text="Contato"
                onClick={closeModal}
              />
            </li>
          </ul>

          <RiCloseFill
            className="absolute right-8 top-8 h-8 w-8 cursor-pointer text-white transition-all ease-in hover:text-textPrimary"
            onClick={closeModal}
          />
        </nav>
      )}
    </>
  )
}

export default NavbarMobile
