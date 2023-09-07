import { Container3DProps } from '@/@types'

const Container3D = ({ children }: Container3DProps) => {
  return (
    <section className="bg-gradient-model flex h-60 w-60 cursor-grabbing items-center justify-center overflow-hidden rounded-full shadow-xl shadow-zinc-950 md:h-96 md:w-96">
      {children}
    </section>
  )
}

export default Container3D
