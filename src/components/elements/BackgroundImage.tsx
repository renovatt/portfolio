export default function BackgroundImage({ image }: { image: string }) {
  return (
    <div
      className={`absolute inset-0 h-full w-full ${image} bg-cover bg-center bg-no-repeat opacity-90 mix-blend-overlay blur-sm`}
    ></div>
  )
}
