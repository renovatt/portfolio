'use client'
import { ReactNode, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { ProjectsTypeProps } from '@types'

type ProjectRootProps = {
  children: ReactNode
} & ProjectsTypeProps

const ProjectRoot = ({ children, ...props }: ProjectRootProps) => {
  const router = useRouter()

  const backPage = useCallback(() => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.replace('/views/projects')
    }
  }, [router])

  function handleCloseModal(
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
  ) {
    if (event.target === event.currentTarget) {
      backPage()
    }
  }

  const backgroundImageUrl = `${props.thumbnail_url}`

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  }

  return (
    <section
      // style={sectionStyle}
      className="fixed inset-0 overflow-y-auto bg-transparent bg-cover bg-center bg-no-repeat backdrop-blur-md"
    >
      <section
        onClick={(e) => handleCloseModal(e)}
        className="flex min-h-full items-center justify-center bg-transparent py-6 backdrop-blur-md"
      >
        <section
          onClick={(e) => handleCloseModal(e)}
          className="relative m-auto flex h-[80%] w-[90%] max-w-6xl flex-col items-center justify-between overflow-y-auto overflow-x-hidden rounded-lg p-4"
        >
          {children}
        </section>
      </section>
    </section>
  )
}

export default ProjectRoot
