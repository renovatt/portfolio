'use client'
import Link from 'next/link'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'
import { useToggle } from '@hooks/useToggle'

const Header = () => {
  const { modal, openModal, closeModal } = useToggle()
  return (
    <header className="container flex h-20 w-full items-center justify-between border-b border-primary-950 bg-primary-900 transition-all md:animate-fade">
      <Link href="/" className="flex text-2xl font-bold md:text-3xl">
        <h1 className="inline-block text-primary-750">
          <span>{'{ '}</span>
          <span className="text-primary-950">...</span>
          Will
          {/* <span className="text-primary-950">Code</span> */}
          <span>{' }'}</span>
        </h1>
      </Link>
      <Navbar openModal={openModal} />
      <NavbarMobile modal={modal} closeModal={closeModal} />
    </header>
  )
}

export default Header
