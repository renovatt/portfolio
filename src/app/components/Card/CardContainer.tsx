import { ReactNode } from 'react'

type CardContainerProps = {
    children: ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
    return (
        <article
            className='flex items-center justify-between flex-col h-full rounded-lg py-6 hover:bg-backgroundShadow border border-zinc-800 hover:border-textPrimary transition-all ease-in-out'
        >
            {children}
        </article>
    )
}

export default CardContainer;