import { Metadata } from 'next'
import { Suspense } from 'react'
import { getProfile } from 'services'
import SmallLoader from '@helpers/SmallLoader'
import profileImage from '@assets/profile.jpeg'
import ProfileText from '@elements/ProfileText'
import BackgroundImage from '@elements/BackgroundImage'
import SkeletonImageProfile from '@helpers/SkeletonImageProfile'

export const metadata: Metadata = {
  title: '{ ...Will } : Sobre mim',
  description:
    'Saiba mais sobre Wildemberg Renovato de Lima. Como um desenvolvedor apaixonado por tecnologia, compartilho minha trajetória, experiência e objetivos profissionais. Explore minhas habilidades técnicas e competências interpessoais.',
}

export default async function Profile() {
  const { profile } = await getProfile()

  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-start overflow-y-scroll transition-all md:overflow-hidden">
      <BackgroundImage image="bg-about" />
      <article className="z-10 my-24 flex w-full flex-col items-center justify-center gap-10 px-4 md:h-full md:flex-row md:justify-around">
        <figure className="animate__animated animate__fadeInDown relative h-80 w-80 overflow-hidden rounded-full">
          <SkeletonImageProfile src={profileImage} alt="profileImage" />
        </figure>
        <section className="flex flex-col items-center md:w-1/2">
          <h1 className="animate__animated animate__fadeInUp mb-8 text-4xl font-bold text-primary-950 md:text-5xl">
            Quem sou eu?
          </h1>
          <Suspense fallback={<SmallLoader />}>
            {profile?.map((profile, index) => (
              <ProfileText key={index} {...profile} />
            ))}
          </Suspense>
        </section>
      </article>
    </section>
  )
}
