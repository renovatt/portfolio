'use client'

import React from 'react'
import Link from 'next/link'
import logo from '@/assets/logo.png'
import { BsFileEarmarkTextFill } from 'react-icons/bs'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import SkeletonImageProfile from './helpers/SkeletonImageProfile';
import { useMessage } from '@/hooks/useMessage'

const Home = () => {
  const cv = '/willcode-cv.pdf'
  const { textEffect, final } = useMessage()

  return (
    <section className='flex items-center justify-center flex-col-reverse md:justify-around md:flex-row w-[95vw] max-w-[1400px] animate-fade transition-all'>
      <article className='flex flex-col md:items-start items-center w-1/2 mt-4 md:mt-0 relative'>
        <span data-aos-delay="300" data-aos="fade-right" className='text-white text-5xl'>Olá, eu sou</span>
        <h1
          data-aos="fade-right"
          data-aos-delay="400"
          className='text-white text-8xl font-bold md:text-9xl md:ml-16'>Will
          <span
            data-aos="fade-up"
            data-aos-delay="1000"
            className='text-textPrimary'>.
          </span>
        </h1>
        <span
          className='mt-2 text-textPrimary text-xl md:text-5xl after:content-["|"] after:ml-2 after:animate-blink after:text-white'>
          {textEffect}
        </span>

        {final && (
          <span className='flex items-center justify-center mt-4 transition-all absolute -bottom-11
           md:left-0'>
            <Link
              data-aos="fade-up"
              data-aos-delay="200"
              className='flex items-center text-white'
              href="https://www.linkedin.com/in/renovatt" target="_blank">
              <FaLinkedin className='h-8 w-8 text-white hover:text-textPrimary transition-all ease-in m-1 hover:-mt-1' />
            </Link>

            <Link
              data-aos="fade-up"
              data-aos-delay="400"
              className='flex items-center text-white'
              href="https://github.com/renovatt" target="_blank">
              <FaGithub className='h-8 w-8 text-white hover:text-textPrimary transition-all ease-in m-1 hover:-mt-1' />
            </Link>

            <Link
              data-aos="fade-up"
              data-aos-delay="600"
              className='flex items-center text-white'
              href={cv} target="_blank">
              <BsFileEarmarkTextFill className='h-8 w-8 text-white hover:text-textPrimary transition-all ease-in m-1 hover:-mt-1' />
            </Link>
          </span>
        )}
      </article>

      <figure className='w-40 md:w-80'>
        <SkeletonImageProfile
          className='animate-fly'
          src={logo}
          alt='logo'
        />
      </figure>
    </section>
  )
}

export default Home;