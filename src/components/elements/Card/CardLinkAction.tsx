'use client'
import Link from 'next/link'
import { ComponentProps } from 'react'

type CardLinkActionProps = {
  text: string
  href: string
} & ComponentProps<'link'>

const CardLinkAction = ({ text, href }: CardLinkActionProps) => {
  return (
    <Link
      className="select-none rounded-lg border-none bg-primary-750 px-4 py-2 text-base font-bold text-primary-950 transition-all ease-in hover:bg-primary-950 hover:text-primary-750"
      href={href}
    >
      {text}
    </Link>
  )
}

export default CardLinkAction
