'use client'
import useStatusStore from 'store'
import { SkillsResponse } from '@types'
import IconsError from '@helpers/IconsError'
import SpinerLoader from '@helpers/SpinerLoader'
import { useSkillQuery } from '@hooks/useSkillQuery'

const SkillsIcons = () => {
  const { setStatus, clearStatus } = useStatusStore()
  const { data, isError, isLoading } = useSkillQuery()

  const skills = data as SkillsResponse

  const handleLoadSvg = (
    event: React.SyntheticEvent<HTMLObjectElement>,
  ): void => {
    const objectElement = event.currentTarget as HTMLObjectElement
    objectElement.style.opacity = '1'
  }

  if (isError) return <IconsError />
  if (isLoading) return <SpinerLoader />

  return skills?.skills?.map((skill) => (
    <section
      key={skill.id}
      onMouseOut={clearStatus}
      onMouseOver={() => setStatus(skill.id)}
      className="flex items-center justify-center transition-all ease-in hover:scale-110"
    >
      <figure
        data-aos="fade-up"
        data-aos-delay="50"
        className="-z-10 h-24 w-24"
      >
        <object
          className="h-full w-full object-cover opacity-0"
          type="image/svg+xml"
          data={skill.svg_link}
          onLoad={handleLoadSvg}
          onMouseOut={clearStatus}
          onMouseOver={() => setStatus(skill.id)}
        ></object>
      </figure>
    </section>
  ))
}

export default SkillsIcons
