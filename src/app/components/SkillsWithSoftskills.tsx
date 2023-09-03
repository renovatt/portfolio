import Softskills from "./Softskills";
import SkillsIcons from "./SkillsIcons";
import SkillsDescriptions from "./SkillsDescriptions";

const SkillsWithSoftskills = () => {
  return (
    <section className='flex justify-around flex-col h-auto md:w-full mb-16 mb:mb-8 max-w-[1400px] transition-all overflow-hidden'>
      <section className='flex items-center justify-between m-8 md:my-8 h-full flex-col md:flex-row'>
        <aside className='grid grid-cols-3 grid-rows-2 gap-8 md:w-[30%] w-auto md:mb-0 mb-8'>
          <SkillsIcons />
        </aside>

        <aside
          data-aos="fade-left"
          data-aos-delay="50"
          className='flex justify-center items-center bg-backgroundThird h-auto md:h-80 w-auto md:w-[50%] md:p-8 overflow-hidden'>
          <SkillsDescriptions />
        </aside>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="100"
        className='flex items-center justify-center flex-col my-0 mx-8 py-2 px-3 h-full bg-backgroundThird'>
        <span className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 items-center'>
          <Softskills />
        </span>
      </section>
    </section>
  );
};

export default SkillsWithSoftskills;