/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ProjectsTypeProps } from '@types'

const ProjectTechsIcons = (props: ProjectsTypeProps) => {
  // const handleLoadSvg = (
  //   event: React.SyntheticEvent<HTMLObjectElement>,
  // ): void => {
  //   const objectElement = event.currentTarget as HTMLObjectElement
  //   objectElement.style.opacity = '1'
  // }
  return (
    <section className="flex w-full items-center justify-center md:justify-start">
      <nav className="flex items-center justify-center">
        {props.techs.links.map((tech) => (
          <Link
            key={tech.id}
            href={tech.link}
            target="_blank"
            className="mx-1 my-0 flex h-6 w-6 items-center justify-center"
          >
            <figure className="-z-10 h-full w-full">
              <img
                className="h-full w-full object-cover"
                src={tech.svg_link}
                alt="svg-icon"
              />
            </figure>
          </Link>
        ))}
      </nav>
    </section>
  )
}

export default ProjectTechsIcons
