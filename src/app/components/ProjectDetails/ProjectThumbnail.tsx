
'use client'

import Image from "next/image"
import { ProjectsTypeProps } from "@/@types"
import { useState } from "react"

const ProjectThumbnail = (props: ProjectsTypeProps) => {

    const [loadingImage, setLoadingImage] = useState(true)

    const handleLoad = (
        event: React.SyntheticEvent<HTMLImageElement>
    ): void => {
        event.currentTarget.style.opacity = "1";
        setLoadingImage(false)
    }

    return (
        <figure className={`w-full h-full md:h-96 max-h-[25rem] transition-all ease-in rounded-lg ${loadingImage ? 'animate-pulse' : ''} bg-zinc-900`}>
            <Image
                className='object-cover opacity-0 rounded-lg w-full h-full'
                src={props.thumbnail_url}
                alt={props.project_name}
                onLoad={handleLoad}
                width={1000}
                height={1000}
                priority
                fetchPriority='high'
                decoding='async'
                data-nimg="1"
            />
        </figure>
    )
}

export default ProjectThumbnail;