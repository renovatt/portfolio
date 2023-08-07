'use client'

import Link from "next/link";
import { ButtonComponentProps } from "@/@types";

const Button = (props: ButtonComponentProps) => {
    if (props.href) {
        return (
            <Link
                className='text-xl font-bold py-2 px-16 transition-all text-textPrimary hover:text-white bg-white hover:bg-backgroundPrimary rounded-lg mt-2'
                href={props.href}
                target="_blank"
            >
                {props.text}
            </Link>
        )
    }

    return (
        <button
            className="border-none text-xl font-bold py-2 px-12 rounded-lg transition-all ease-in text-textPrimary bg-white hover:bg-backgroundPrimary hover:text-white"
            onClick={() => props.onClick}
        >
            {props.text}
        </button>
    )
}

export default Button;