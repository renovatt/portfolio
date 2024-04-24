import Image from 'next/image'

const CloudImage = () => {
  return (
    <div className="absolute bottom-0 left-14 top-5 -z-10 hidden w-[700px] mix-blend-soft-light md:flex">
      <Image
        src={'/assets/cloud.png'}
        width={260}
        height={200}
        className="h-full w-full"
        alt="cloud-image"
      />
    </div>
  )
}
export default CloudImage
