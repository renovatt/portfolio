import BackgroundImage from '@atoms/background-image'

const Loader = () => {
  return (
    <section className="absolute inset-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-900 px-24 py-0">
      <BackgroundImage image="bg-load" />
      <h2 className="mb-4 text-center text-xl font-bold text-750">
        Carregando..
      </h2>
      <span className="relative h-1 w-96 max-w-full rounded-full">
        <span className="absolute left-0 top-0 h-1 w-0 animate-load rounded-full bg-950"></span>
      </span>
    </section>
  )
}

export default Loader
