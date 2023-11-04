const Loader = () => {
  return (
    <section className="flex h-[90vh] w-full flex-col items-center justify-center bg-transparent px-24 py-0">
      <h2 className="mb-4 text-center text-xl font-bold text-primary-750">
        Carregando..
      </h2>
      <span className="relative h-1 w-96 max-w-full rounded-full">
        <span className="absolute left-0 top-0 h-1 w-0 animate-load rounded-full bg-primary-950"></span>
      </span>
    </section>
  )
}

export default Loader
