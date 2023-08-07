'use client'

import Link from "next/link";
import { ComponentProps } from "react"

type CardLinkActionProps = {
    text: string;
    href: string;
} & ComponentProps<'link'>

const CardLinkAction = ({ text, href }: CardLinkActionProps) => {
    return (
        <Link
            className='border-none text-base font-bold py-2 px-4 rounded-lg transition-all ease-in text-textPrimary bg-white hover:bg-backgroundPrimary hover:text-white select-none'
            href={href}
        >
            {text}
        </Link>
    )
}

export default CardLinkAction;