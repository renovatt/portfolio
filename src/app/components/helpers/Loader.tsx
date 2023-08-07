const Loader = () => {
    return (
        <section className='flex items-center justify-center flex-col h-[90vh] w-full py-0 px-24 bg-transparent'>
            <h2 className='text-xl text-white mb-4 font-bold text-center'>Carregando..</h2>
            <span className='h-1 w-96 max-w-full rounded-full relative'>
                <span className='absolute top-0 left-0 h-1 w-0 bg-backgroundPrimary rounded-full animate-load'></span>
            </span>
        </section>
    )
}

export default Loader;