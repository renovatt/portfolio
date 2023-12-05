type BackgrundImageProps = {
  image: string
}

export default function BackgrundImage({ image }: BackgrundImageProps) {
  return (
    <div
      className={`absolute inset-0 h-screen w-screen ${image} bg-cover bg-center bg-no-repeat opacity-90 mix-blend-overlay blur-sm`}
    ></div>
  )
}
