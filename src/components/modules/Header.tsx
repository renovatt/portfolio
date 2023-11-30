'use client'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'
import { useToggle } from '@hooks/useToggle'
import Logo from '@elements/Logo'

const Header = () => {
  const { modal, openModal, closeModal } = useToggle()
  return (
    <header className="container flex h-20 w-full items-center justify-between overflow-hidden border-b border-primary-950 bg-primary-900 transition-all">
      <Logo />
      <Navbar openModal={openModal} />
      <NavbarMobile modal={modal} closeModal={closeModal} />
    </header>
  )
}

export default Header
