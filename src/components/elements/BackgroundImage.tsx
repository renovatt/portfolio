type BackgrundImageProps = {
  image: string
}

export default function BackgroundImage({ image }: BackgrundImageProps) {
  return (
    <div
      className={`absolute inset-0 h-full w-full ${image} bg-cover bg-center bg-no-repeat opacity-90 mix-blend-overlay blur-sm`}
    ></div>
  )
}
