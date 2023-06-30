import { ContainerTypeProps } from '@/@types'

export const Container = ({ children }: ContainerTypeProps) => {
    return (
        <main className='flex flex-1 items-center justify-center flex-col min-h-[90vh]'>
            {children}
        </main>
    )
}