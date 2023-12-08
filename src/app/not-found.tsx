import BackgroundImage from '@elements/BackgroundImage'

export default function NotFound() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center bg-900 px-24 py-0">
      <BackgroundImage image="bg-notFound animate-fadeUp" />
      <p className="mt-8 text-center text-5xl text-750">
        Página não encontrada!
      </p>
    </section>
  )
}
