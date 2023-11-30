import SkeletonImageProfile from '@helpers/SkeletonImageProfile'
import SmallLoader from '@helpers/SmallLoader'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { getProfile } from 'services'
import profileImage from '@assets/about.png'
import ProfileText from '@elements/ProfileText'

export const metadata: Metadata = {
  title: '{ ...Will } : Sobre mim',
  description:
    'Saiba mais sobre Wildemberg Renovato de Lima. Como um desenvolvedor apaixonado por tecnologia, compartilho minha trajetória, experiência e objetivos profissionais. Explore minhas habilidades técnicas e competências interpessoais.',
}

export default async function Profile() {
  const { profile } = await getProfile()

  return (
    <section className="container my-4 flex w-full flex-col items-center justify-center overflow-hidden bg-primary-900 transition-all">
      <article className="flex h-auto flex-col items-center justify-center md:w-full md:flex-row md:justify-around">
        <figure className="h-80 w-80">
          <SkeletonImageProfile src={profileImage} alt="profileImage" />
        </figure>
        <section className="ml-0 mt-16 flex min-h-[25rem] w-full flex-col items-center md:ml-8 md:w-[40rem]">
          <h1 className="mb-8 animate-fade text-4xl font-bold text-primary-950 md:text-5xl">
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
