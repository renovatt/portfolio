import { ReactNode } from 'react'
import { ProjectsTypeProps } from '@types'
import { useRouter } from 'next/navigation'

type CardARootProps = {
  children: ReactNode
} & ProjectsTypeProps

const CardRoot = ({ children, ...props }: CardARootProps) => {
  const router = useRouter()

  const gotToProjectPage = () => {
    router.push(`project/${props.id}`)
  }

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = '1'
  }

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="50"
      className="relative m-4 h-72 w-44 cursor-pointer rounded-lg bg-third-950 bg-cover bg-center md:h-80 md:w-48"
      style={{ backgroundImage: `url(${props.banner_url})` }}
      onLoad={handleLoad}
      onClick={gotToProjectPage}
    >
      {children}
    </section>
  )
}

export default CardRoot
