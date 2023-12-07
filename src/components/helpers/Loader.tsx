import BackgroundImage from '@elements/BackgroundImage'

const Loader = () => {
  return (
    <section className="bg-900 absolute inset-0 z-50 flex h-screen w-full flex-col items-center justify-center px-24 py-0">
      <BackgroundImage image="bg-load" />
      <h2 className="text-750 mb-4 text-center text-xl font-bold">
        Carregando..
      </h2>
      <span className="relative h-1 w-96 max-w-full rounded-full">
        <span className="bg-950 absolute left-0 top-0 h-1 w-0 animate-load rounded-full"></span>
      </span>
    </section>
  )
}

export default Loader
