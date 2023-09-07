import HomeLinks from './HomeLinks'
import TypingEffect from './TypingEffect'

function HomePresentation() {
  return (
    <article className='flex flex-col md:items-start items-center w-1/2 mt-4 md:mt-0 relative'>
      <span
        data-aos-delay="300"
        data-aos="fade-right"
        className='text-white text-5xl'>
        Olá, eu sou
      </span>
      <h1
        data-aos="fade-right"
        data-aos-delay="400"
        className='text-white text-8xl font-bold md:text-9xl md:ml-16'>Will
        <span
          data-aos="fade-up"
          data-aos-delay="1000"
          className='text-textPrimary'>.
        </span>
      </h1>
      <TypingEffect />
      <HomeLinks />
    </article>
  )
}

export default HomePresentation