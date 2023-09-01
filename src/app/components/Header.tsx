'use client'

import React from 'react'
import Link from 'next/link';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import { useToggle } from '@/hooks/useToggle';

const Header = () => {
    const {
        modal,
        openModal,
        closeModal
    } = useToggle()

    return (
        <header className='flex justify-between items-center h-20 py-0 px-16 bg-backgroundSecundary border-b border-borderPrimary md:animate-fade transition-all'>
            <Link href='/'
                className='flex text-2xl md:text-3xl font-bold'
            >
                <h1 className='inline-block text-white'>
                    <span>{'{'}</span>
                    <span className='text-textPrimary'>...</span>
                    Will
                    <span className='text-textPrimary'>Code</span>
                    <span>{'}'}</span>
                </h1>
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

export default Header;
