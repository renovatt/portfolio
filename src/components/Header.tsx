'use client'

import React from 'react'
import Link from 'next/link';
import { Navbar } from './Navbar';
import { NavbarMobile } from './NavbarMobile';
import { useToggle } from '@/hooks/useToggle';

export const Header = () => {
    const {
        modal,
        openModal,
        closeModal } = useToggle()

    return (
        <header className='flex justify-between items-center h-20 py-0 px-16 bg-backgroundSecundary border-b border-borderPrimary md:animate-fade transition-all'>
            <Link href='/'
                className='flex text-3xl font-bold'
            >
                <span className='block text-white'>Will</span>
                <span className='block text-textPrimary'>Code</span>
            </Link>

            <Navbar
                openModal={openModal}
            />

            <NavbarMobile
                modal={modal}
                closeModal={closeModal}
            />
        </header>
    )
}
