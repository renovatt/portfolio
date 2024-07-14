import { Metadata } from 'next'
import BackgroundImage from '@atoms/background-image'
import SideProfile from '@features/profile/templates/side-profile'
import ProfileImage from '@features/profile/molecules/profile-image'
import CloudImage from '@features/profile/atoms/cloud-image'

export const metadata: Metadata = {
  title: 'Sobre mim',
  description:
    'Meu compromisso é aprimorar continuamente minhas habilidades e conhecimentos, garantindo que esteja sempre atualizado no dinâmico campo da tecnologia. ',
}

export default function Profile() {
  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-center overflow-x-hidden py-20 transition-all">
      <CloudImage />
      <BackgroundImage image="bg-about animate-fade" />
      <article className="z-10 flex h-full w-full flex-col items-center justify-start gap-10 overflow-y-auto px-4 md:flex-row md:justify-around">
        <ProfileImage />
        <SideProfile />
      </article>
    </section>
  )
}
