const SmallLoader = () => {
    return (
        <span className='h-1 w-96 max-w-full rounded-full relative'>
            <span className='absolute top-0 left-0 h-1 w-0 bg-backgroundPrimary rounded-full animate-load'></span>
        </span>
    )
}

export default SmallLoader