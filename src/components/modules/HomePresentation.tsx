import HomeLinks from './HomeLinks'
import TypingEffect from '@elements/TypingEffect'

const HomePresentation = () => {
  return (
    <article className="relative mt-4 flex w-full flex-col items-center md:mt-0 md:w-1/2 md:items-start">
      <span className="animate__animated animate__fadeIn text-5xl text-primary-750">
        Olá,
        <span className="animate__animated animate__fadeIn pl-2 text-5xl text-primary-750">
          eu
        </span>
        <span className="animate__animated animate__fadeIn pl-2 text-5xl text-primary-750">
          sou
        </span>
      </span>

      <h1 className="animate__animated animate__fadeIn  text-8xl font-bold text-primary-750 md:ml-16 md:text-9xl">
        Will
        <span className="animate__animated animate__slideInDown  text-primary-950">
          .
        </span>
      </h1>
      <TypingEffect />
      <HomeLinks />
    </article>
  )
}

export default HomePresentation
