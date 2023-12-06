import Image from 'next/image'

const Ray = () => {
  return (
    <div className="absolute -bottom-2 -right-16 -z-10 hidden w-[800px] rotate-180 opacity-10 mix-blend-color-dodge duration-75 md:flex">
      <Image
        src={'/ray.png'}
        width={260}
        height={200}
        className="h-full w-full "
        alt="ray-image"
      />
    </div>
  )
}

export default Ray
