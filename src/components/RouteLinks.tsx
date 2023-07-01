import Link from 'next/link';
import { RouteLinksProps } from '@/@types';

export const RouteLinks = (props: RouteLinksProps) => {
    return (
        <Link
            className={`${props.onClick ? 'text-3xl' : 'text-xl hover:text-textPrimary'} text-white font-bold transition-all ease-in`}
            href={props.href}
            onClick={props.onClick}
        >
            {props.text}
        </Link>
    )
}