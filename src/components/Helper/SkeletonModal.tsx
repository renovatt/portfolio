export default function SkeletonModal() {
    return (
        <div className='bg-backgroundSecundary shadow rounded-lg p-4 max-w-6xl max-h-[initial] md:max-h-[800px] w-[80%] mx-auto md:mt-0 mt-[35rem] md:mb-0 mb-10 relaive'>
            <div className='animate-pulse flex space-x-4'>
                <div className='flex-2 space-y-6 py-1'>
                    <div className='h-96 w-60 bg-backgroundThird rounded'></div>
                    <div className='space-y-3'>
                        <div className='flex gap-4 w-60'>
                            <div className='h-10  w-60 bg-backgroundThird rounded'></div>
                        </div>
                        <div className='flex gap-4 w-60'>
                            <div className='h-10  w-60 bg-backgroundThird rounded'></div>
                        </div>
                    </div>
                </div>

                <div className='flex-1 space-y-6 py-1'>
                    <div className='h-80 w-full bg-backgroundThird rounded'></div>
                    <div className='space-y-3'>
                        <div className='flex gap-4'>
                            <div className='h-20  w-full bg-backgroundThird rounded'></div>
                        </div>
                        <div className='h-10 bg-backgroundThird rounded'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}