'use client'
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.log(error.digest)
  console.log(error.message)
  return (
    <section className="bg-white">
      <h1>Um erro ocorreu. Tente novamente.</h1>
      <button onClick={() => reset()}>Tente novamente.</button>
    </section>
  )
}
