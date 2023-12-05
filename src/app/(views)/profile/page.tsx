import { Metadata } from 'next'
import { Suspense } from 'react'
import { getProfile } from 'services'
import SmallLoader from '@helpers/SmallLoader'
import ProfileText from '@elements/ProfileText'
import BackgroundImage from '@elements/BackgroundImage'
import ImageProfile from '@elements/ImageProfile'

export const metadata: Metadata = {
  title: '{ ...Will } : Sobre mim',
  description:
    'Saiba mais sobre Wildemberg Renovato de Lima. Como um desenvolvedor apaixonado por tecnologia, compartilho minha trajetória, experiência e objetivos profissionais. Explore minhas habilidades técnicas e competências interpessoais.',
}

export default async function Profile() {
  const { profile } = await getProfile()

  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-center overflow-x-hidden py-20 transition-all">
      <BackgroundImage image="bg-about animate-fade" />
      <article className="z-10 flex h-full w-full flex-col items-center justify-start gap-10 overflow-y-auto px-4 md:flex-row md:justify-around">
        <ImageProfile />
        <section className="flex flex-col items-center md:w-1/2">
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
