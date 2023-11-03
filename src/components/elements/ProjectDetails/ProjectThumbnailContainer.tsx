import { ReactNode } from 'react'

type ProjectThumbnailContainerProps = {
  children: ReactNode
}

const ProjectThumbnailContainer = ({
  children,
}: ProjectThumbnailContainerProps) => {
  return (
    <section className="mt-8 flex h-auto w-full max-w-[900px] flex-col items-center justify-center overflow-hidden p-8 md:mt-0 md:h-full md:justify-around">
      {children}
    </section>
  )
}

export default ProjectThumbnailContainer
