'use client'
import React from 'react'
import RouteLinks from '@elements/RouteLinks'
import { RiCloseFill } from 'react-icons/ri'
import { MenuMobileTypeProps } from '@types'

const NavbarMobile = ({ modal, closeModal }: MenuMobileTypeProps) => {
  React.useEffect(() => {
    document.body.style.overflowY = modal ? 'hidden' : 'auto'
  }, [modal])

  return (
    <>
      {modal && (
        <nav
          className={`absolute left-0 top-0 z-50 flex h-[50%] w-full items-center justify-center rounded-b-3xl bg-primary-900 shadow-2xl shadow-black transition-all ease-in md:hidden ${
            modal ? 'flex animate-mobileActive' : 'mobileInactive'
          }`}
        >
          <ul className="w-full transform flex-col items-center justify-center gap-2 overflow-hidden transition-all">
            <li className="my-4 w-full py-2 text-center transition-all hover:bg-third-950">
              <RouteLinks
                href="/home"
                text="<Página inicial />"
                onClick={closeModal}
              />
            </li>

            <li className="my-2 w-full p-2 text-center transition-all hover:bg-third-950">
              <RouteLinks
                href="/profile"
                text="<Quem sou eu />"
                onClick={closeModal}
              />
            </li>

            <li className="my-2 w-full p-2 text-center transition-all hover:bg-third-950">
              <RouteLinks
                href="/projects"
                text="<Projetos />"
                onClick={closeModal}
              />
            </li>

            <li className="my-2 w-full p-2 text-center transition-all hover:bg-third-950">
              <RouteLinks
                href="/skills"
                text="<Habilidades />"
                onClick={closeModal}
              />
            </li>

            <li className="my-2 w-full p-2 text-center transition-all hover:bg-third-950">
              <RouteLinks
                href="/contact"
                text="<Contato />"
                onClick={closeModal}
              />
            </li>
          </ul>

          <RiCloseFill
            className="hover:text-textPrimary absolute right-3 top-5 h-8 w-8 cursor-pointer text-white transition-all ease-in"
            onClick={closeModal}
          />
        </nav>
      )}
    </>
  )
}

export default NavbarMobile
