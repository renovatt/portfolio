'use client'

import profileImage from '@/assets/about.png'
import SmallError from './helpers/SmallError'
import SmallLoader from './helpers/SmallLoader'
import SkeletonImageProfile from './helpers/SkeletonImageProfile'
import { ProfileResponse } from '@/@types'
import { useProfileQuery } from '@/hooks/useProfileQuery'

const About = () => {
  const { data, isError, isLoading } = useProfileQuery()

  const profile = data as ProfileResponse

  return (
    <section className="flex w-full max-w-[1400px] animate-fade flex-col items-center justify-center bg-backgroundSecundary px-28 transition-all">
      <article className="mt-8 flex h-auto max-h-[1400px] flex-col items-center justify-center md:w-full  md:flex-row md:justify-around">
        <figure className="h-80 w-80">
          <SkeletonImageProfile src={profileImage} alt="profileImage" />
        </figure>
        <section className="my-16 ml-0 flex min-h-[25rem] w-full flex-col items-center md:ml-8 md:w-[40rem]">
          <h1
            data-aos="fade-up"
            className="mb-8 text-4xl font-bold text-textPrimary md:text-5xl"
          >
            Quem sou eu?
          </h1>

          {isLoading && <SmallLoader />}
          {isError && <SmallError />}

          {profile &&
            profile.profile.map((profile) => (
              <article key={profile.id}>
                <p
                  data-aos="fade-up"
                  className="text-justify text-xl text-textDescription"
                >
                  {profile.description_1}
                </p>
                <p
                  data-aos="fade-up"
                  className="text-justify text-xl text-textDescription"
                >
                  {profile.description_2}
                </p>
              </article>
            ))}
        </section>
      </article>
    </section>
  )
}

export default About
