'use client'

import React from 'react'
import logo from '../assets/logo.png'
import { SkeletonImageProfile } from './Helper/SkeletonImageProfile';

export const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [textEffect, setText] = React.useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => prevText + "Front-end Developer".charAt(index));
      setIndex(prevIndex => prevIndex + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className='flex items-center justify-center flex-col-reverse md:justify-around md:flex-row w-[95vw] max-w-[1400px] animate-fade transition-all'>
      <article className='flex flex-col md:items-start items-center w-1/2 mt-4 md:mt-0'>
        <span className='text-white text-5xl'>Olá, eu sou</span>
        <h1 className='text-white text-8xl font-bold md:text-9xl md:ml-16'>Will<span className='text-textPrimary'>.</span></h1>
        <span className='mt-2 text-textPrimary text-xl md:text-5xl after:content-["|"] after:ml-2 after:animate-blink after:text-white'>{textEffect}</span>
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