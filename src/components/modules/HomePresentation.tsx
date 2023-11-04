import HomeLinks from './HomeLinks'
import TypingEffect from '@elements/TypingEffect'

function HomePresentation() {
  return (
    <article className="relative mt-4 flex w-full flex-col items-center md:mt-0 md:w-1/2 md:items-start">
      <span
        data-aos-delay="300"
        data-aos="fade-right"
        className="text-5xl text-primary-750"
      >
        Olá, eu sou
      </span>
      <h1
        data-aos="fade-right"
        data-aos-delay="400"
        className="text-8xl font-bold text-primary-750 md:ml-16 md:text-9xl"
      >
        Will
        <span
          data-aos="fade-up"
          data-aos-delay="1000"
          className="text-textPrimary"
        >
          .
        </span>
      </h1>
      <TypingEffect />
      <HomeLinks />
    </article>
  )
}

export default HomePresentation
