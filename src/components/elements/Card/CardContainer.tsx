import { ReactNode } from 'react'

type CardContainerProps = {
  children: ReactNode
}

const CardContainer = ({ children }: CardContainerProps) => {
  return (
    <article className="flex h-full flex-col items-center justify-between rounded-lg border border-zinc-800 py-6 transition-all ease-in-out hover:border-primary-950 hover:bg-third-950">
      {children}
    </article>
  )
}

export default CardContainer
