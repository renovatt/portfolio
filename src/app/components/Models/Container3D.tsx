import { Container3DProps } from "@/@types"

const Container3D = ({ children }: Container3DProps) => {
  return (
    <section
      className="flex items-center bg-gradient-model justify-center w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden cursor-grabbing shadow-xl shadow-zinc-950">
      {children}
    </section>
  )
}

export default Container3D