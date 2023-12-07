export default function Title({ title }: { title: string }) {
  return (
    <h1 className="mb-8 text-4xl font-bold text-primary-950 md:text-5xl">
      {title}
    </h1>
  )
}
