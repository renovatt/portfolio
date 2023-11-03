'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ProjectsTypeProps } from '@types'

const ProjectThumbnail = (props: ProjectsTypeProps) => {
  const [loadingImage, setLoadingImage] = useState(true)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = '1'
    setLoadingImage(false)
  }

  return (
    <figure
      className={`h-full max-h-[25rem] w-full rounded-lg transition-all ease-in md:h-96 ${
        loadingImage ? 'animate-pulse' : ''
      } bg-zinc-900`}
    >
      <Image
        className="h-full w-full rounded-lg object-cover opacity-0"
        src={props.thumbnail_url}
        alt={props.project_name}
        onLoad={handleLoad}
        width={1000}
        height={1000}
        priority
        fetchPriority="high"
        decoding="async"
        data-nimg="1"
      />
    </figure>
  )
}

export default ProjectThumbnail
