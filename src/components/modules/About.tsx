'use client'
import { ProfileResponse } from '@types'
import profileImage from '@assets/about.png'
import SmallError from '@helpers/SmallError'
import SmallLoader from '@helpers/SmallLoader'
import { useProfileQuery } from '@hooks/useProfileQuery'
import SkeletonImageProfile from '@helpers/SkeletonImageProfile'

const About = () => {
  const { data, isError, isLoading } = useProfileQuery()
  const profile = data as ProfileResponse
  return (
    <section className="container my-4 flex w-full animate-fade flex-col items-center justify-center overflow-hidden bg-primary-900 transition-all">
      <article className="flex h-auto flex-col items-center justify-center md:w-full md:flex-row md:justify-around">
        <figure className="h-80 w-80">
          <SkeletonImageProfile src={profileImage} alt="profileImage" />
        </figure>
        <section className="ml-0 mt-16 flex min-h-[25rem] w-full flex-col items-center md:ml-8 md:w-[40rem]">
          <h1
            data-aos="fade-up"
            className="mb-8 text-4xl font-bold text-primary-950 md:text-5xl"
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
                  className="text-justify text-xl text-secondary-850"
                >
                  {profile.description_1}
                </p>
                <p
                  data-aos="fade-up"
                  className="text-justify text-xl text-secondary-850"
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
