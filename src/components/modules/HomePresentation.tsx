import TypingEffect from '@elements/TypingEffect'

const HomePresentation = () => {
  return (
    <article className="relative flex w-full flex-col items-center p-0 md:items-start md:pl-4">
      <span className="animate__animated animate__fadeIn text-5xl text-primary-750">
        Olá,
        <span className="animate__animated animate__fadeIn pl-2 text-5xl text-primary-750">
          eu
        </span>
        <span className="animate__animated animate__fadeIn pl-2 text-5xl text-primary-750">
          sou
        </span>
      </span>

      <h1 className="animate__animated animate__fadeIn  text-8xl font-bold text-primary-750 md:ml-8 md:text-9xl">
        Will
        <span className="animate__animated animate__slideInDown  text-primary-950">
          .
        </span>
      </h1>
      <TypingEffect />
    </article>
  )
}

export default HomePresentation
