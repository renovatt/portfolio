'use client'

import { ProfileResponse } from '@/@types'
import SmallError from './Helper/SmallError'
import SmallLoader from './Helper/SmallLoader'
import profileImage from '../assets/about.png'
import { useProfileQuery } from '@/hooks/useProfileQuery'
import { SkeletonImageProfile } from './Helper/SkeletonImageProfile'

export const About = () => {

  const {
    data,
    isError,
    isLoading
  } = useProfileQuery()

  const profile = data as ProfileResponse;

  return (
    <section className='flex items-center justify-center flex-col bg-backgroundSecundary px-28 w-full max-w-[1400px] animate-fade transition-all'>
      <article className='flex items-center justify-center flex-col md:justify-around md:flex-row h-auto md:w-full  max-h-[1400px] mt-8'>
        <figure className='w-80 h-80'>
          <SkeletonImageProfile
            src={profileImage}
            alt='profileImage'
          />
        </figure>
        <section className='flex items-center min-h-[25rem] w-full my-16 ml-0 md:ml-8 md:w-[40rem] flex-col'>
          <h1 className='text-textPrimary text-4xl md:text-5xl font-bold mb-8'>Quem sou eu?</h1>

          {isLoading && <SmallLoader />}
          {isError && <SmallError />}

          {profile && profile.profile.map(profile => (
            <article key={profile.id}>
              <p className='text-textDescription text-xl text-justify animate-fade'>
                {profile.description_1}
              </p>
              <p className='text-textDescription text-xl text-justify animate-fade'>
                {profile.description_2}
              </p>
            </article>
          ))}
        </section>
      </article>
    </section>
  )
}
