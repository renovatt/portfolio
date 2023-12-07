import TypingEffect from '@elements/TypingEffect'

export default function SideHome() {
  return (
    <section className="relative flex h-1/2 w-full flex-col items-center justify-center gap-5 md:h-screen md:w-2/5">
      <article className="relative flex w-full flex-col items-center p-0 md:items-start md:pl-4">
        <span className="animate__animated animate__fadeIn text-750 text-5xl">
          Olá,
          <span className="animate__animated animate__fadeIn text-750 pl-2 text-5xl">
            eu
          </span>
          <span className="animate__animated animate__fadeIn text-750 pl-2 text-5xl">
            sou
          </span>
        </span>

        <h1 className="animate__animated animate__fadeIn  text-750 text-8xl font-bold md:ml-8 md:text-9xl">
          Will
          <span className="animate__animated animate__slideInDown  text-950">
            .
          </span>
        </h1>
        <TypingEffect />
      </article>
    </section>
  )
}
