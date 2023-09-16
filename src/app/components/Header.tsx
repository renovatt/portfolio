'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'
import { useToggle } from '@/hooks/useToggle'

const Header = () => {
  const { modal, openModal, closeModal } = useToggle()

  return (
    <header className="flex h-20 items-center justify-between border-b border-borderPrimary bg-backgroundSecundary px-4 transition-all md:animate-fade lg:px-16">
      <Link href="/" className="flex text-2xl font-bold md:text-3xl">
        <h1 className="inline-block text-white">
          <span>{'{'}</span>
          <span className="text-textPrimary">...</span>
          Will
          <span className="text-textPrimary">Code</span>
          <span>{'}'}</span>
        </h1>
      </Link>

      <Navbar openModal={openModal} />

      <NavbarMobile modal={modal} closeModal={closeModal} />
    </header>
  )
}

export default Header
