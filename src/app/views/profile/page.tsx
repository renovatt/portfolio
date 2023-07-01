import { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
    title: 'WillCode | Sobre mim',
    description: 'Saiba mais sobre Wildemberg Renovato de Lima. Como um desenvolvedor apaixonado por tecnologia, compartilho minha trajetória, experiência e objetivos profissionais. Explore minhas habilidades técnicas e competências interpessoais.',
}

export default function Profile() {
    return (
        <About />
    )
}