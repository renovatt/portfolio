import TypingEffect from '@elements/TypingEffect'

export default function SideHome() {
  return (
    <section className="relative flex h-1/2 w-full flex-col items-center justify-center gap-5 md:h-screen md:w-2/5">
      <article className="relative flex w-full flex-col items-center p-0 md:items-start md:pl-10">
        <span className="animate__animated animate__fadeIn text-5xl text-750">
          Olá,
          <span className="animate__animated animate__fadeIn pl-2 text-5xl text-750">
            eu
          </span>
          <span className="animate__animated animate__fadeIn pl-2 text-5xl text-750">
            sou
          </span>
        </span>

        <h1 className="animate__animated animate__fadeIn text-8xl font-bold text-750 md:ml-8 md:text-9xl">
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
