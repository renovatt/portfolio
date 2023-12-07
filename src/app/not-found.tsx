import BackgroundImage from '@elements/BackgroundImage'

export default function NotFound() {
  return (
    <section className="bg-950 flex h-screen w-full flex-col items-center justify-center px-24 py-0">
      <BackgroundImage image="bg-notFound animate-fadeUp" />
      <p className="text-750 mt-8 text-center text-5xl">
        Página não encontrada!
      </p>
    </section>
  )
}
