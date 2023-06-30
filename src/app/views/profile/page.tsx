import { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
    title: 'Portfolio | Sobre mim',
    description: 'Wildemberg Renovato portfolio',
}

export default function Profile() {
    return (
        <About />
    )
}