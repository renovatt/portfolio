import Link from 'next/link';
import { RouteLinksProps } from '@/@types';
import { usePathname } from 'next/navigation';

export const RouteLinks = (props: RouteLinksProps) => {
    const pathname = usePathname()
    const isActive = pathname === props.href;
    
    return (
        <Link
            className={`${props.onClick ? 'text-3xl' : `text-xl hover:text-textPrimary ${isActive ? 'text-textPrimary' : 'text-white'}`} font-bold transition-all ease-in`}
            href={props.href}
            onClick={props.onClick}
        >
            {props.text}
        </Link>
    );
};
