import Image from 'next/image'
import error from '@assets/error.png'

const NotFoundPage = () => {
  return (
    <section className="flex h-[90vh] w-full flex-col items-center justify-center bg-transparent px-24 py-0">
      <figure className="flex h-52 w-52 items-center justify-center">
        <Image
          className="h-full w-full"
          src={error}
          alt={'error-image'}
          width={1000}
          height={1000}
          priority
        />
      </figure>
      <p className="mt-8 text-center text-5xl text-primary-750">
        Página não encontrada!
      </p>
    </section>
  )
}

export default NotFoundPage
