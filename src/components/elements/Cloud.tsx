import Image from 'next/image'

export default function Cloud() {
  return (
    <div className="absolute bottom-0 left-14 top-5 -z-10 hidden w-[700px] mix-blend-soft-light md:flex">
      <Image
        src={'/cloud.png'}
        width={260}
        height={200}
        className="h-full w-full"
        alt="cloud-image"
      />
    </div>
  )
}
