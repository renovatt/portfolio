import { Metadata } from "next";
import { ProjectsMap } from "@/components/ProjectsMap";

export const metadata: Metadata = {
    title: 'WillCode | Projetos',
    description: 'Explore os projetos do WillCode, desde trabalhos recentes a conquistas passadas. Descubra soluções inovadoras, tecnologias utilizadas e resultados alcançados. Veja como minhas habilidades técnicas são aplicadas para criar produtos de qualidade.',
}

export default function Projects() {
    return (
        <ProjectsMap />
    )
}