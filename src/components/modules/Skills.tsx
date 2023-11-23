import SkillsIcons from '@elements/SkillsIcons'
import SkillsDescriptions from '@elements/SkillsDescriptions'

const Skills = () => {
  return (
    <section className="container flex h-auto w-full flex-col justify-around overflow-hidden transition-all">
      <section className="m-4 flex h-full flex-col items-center justify-between gap-4 md:my-8 md:flex-row">
        <aside className="mb-8 grid w-auto grid-cols-4 gap-4 md:mb-0">
          <SkillsIcons />
        </aside>

        <aside
          data-aos="fade"
          data-aos-delay="50"
          className="flex h-auto w-auto items-center justify-center overflow-hidden bg-primary-850 md:h-80 md:w-[50%] md:p-8"
        >
          <SkillsDescriptions />
        </aside>
      </section>
    </section>
  )
}

export default Skills
