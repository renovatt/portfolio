'use client'
import useStatusStore from 'store'
import { skills } from 'mocks/skills'

const SkillsIcons = () => {
  const { setStatus, clearStatus } = useStatusStore()

  const handleLoadSvg = (
    event: React.SyntheticEvent<HTMLObjectElement>,
  ): void => {
    const objectElement = event.currentTarget as HTMLObjectElement
    objectElement.style.opacity = '1'
  }

  return skills?.map((skill) => (
    <section
      key={skill.id}
      onMouseOut={clearStatus}
      onMouseOver={() => setStatus(skill.id)}
      className="flex cursor-pointer items-center justify-center transition-all ease-in hover:scale-110"
    >
      <figure className="-z-10 h-24 w-24">
        <object
          data-aos="fade"
          data-aos-delay="50"
          className="h-full w-full object-cover"
          type="image/svg+xml"
          data={skill.svg_link}
          onLoad={handleLoadSvg}
          onMouseOut={clearStatus}
          onMouseOver={() => setStatus(skill.id)}
        />
      </figure>
    </section>
  ))
}

export default SkillsIcons
