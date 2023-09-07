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
      className="select-none rounded-lg border-none bg-white px-4 py-2 text-base font-bold text-textPrimary transition-all ease-in hover:bg-backgroundPrimary hover:text-white"
      href={href}
    >
      {text}
    </Link>
  )
}

export default CardLinkAction
