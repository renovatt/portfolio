import Softskills from './Softskills'
import SkillsIcons from './SkillsIcons'
import SkillsDescriptions from './SkillsDescriptions'

const SkillsWithSoftskills = () => {
  return (
    <section className="mb:mb-8 mb-16 flex h-auto max-w-[1400px] flex-col justify-around overflow-hidden transition-all md:w-full">
      <section className="m-8 flex h-full flex-col items-center justify-between md:my-8 md:flex-row">
        <aside className="mb-8 grid w-auto grid-cols-3 grid-rows-2 gap-4 md:mb-0 md:w-[30%] lg:gap-8">
          <SkillsIcons />
        </aside>

        <aside
          data-aos="fade-left"
          data-aos-delay="50"
          className="flex h-auto w-auto items-center justify-center overflow-hidden bg-backgroundThird md:h-80 md:w-[50%] md:p-8"
        >
          <SkillsDescriptions />
        </aside>
      </section>

      <section className="mx-8 my-0 flex h-full flex-col items-center justify-center bg-backgroundThird px-3 py-2">
        <span className="grid grid-cols-3 items-center md:grid-cols-6 lg:grid-cols-8">
          <Softskills />
        </span>
      </section>
    </section>
  )
}

export default SkillsWithSoftskills
