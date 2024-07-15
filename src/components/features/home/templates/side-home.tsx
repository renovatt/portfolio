import Presentation from '../organisms/presentation'

const SideHome = () => {
  return (
    <section className="pointer-events-none relative flex h-1/2 w-full flex-col items-center justify-center gap-5 md:h-full md:w-1/2">
      <Presentation />
    </section>
  )
}

export default SideHome
