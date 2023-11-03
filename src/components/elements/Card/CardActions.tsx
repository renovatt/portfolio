import { ReactNode } from 'react'

type CardActionsProps = {
  children: ReactNode
}

const CardActions = ({ children }: CardActionsProps) => {
  return <div className="flex gap-2 self-center">{children}</div>
}

export default CardActions
