import Image from 'next/image'
import error from '@/assets/error.png'

const NotFoundPage = () => {
    return (
        <section className='flex items-center justify-center flex-col h-[90vh] w-full py-0 px-24 bg-transparent'>
            <figure className='flex items-center justify-center w-52 h-52'>
                <Image
                    className='h-full w-full'
                    src={error}
                    alt={'error-image'}
                    width={1000}
                    height={1000}
                    priority
                />
            </figure>
            <p className='text-center text-white text-5xl mt-8'>Página não encontrada!</p>
        </section>
    )
}

export default NotFoundPage;