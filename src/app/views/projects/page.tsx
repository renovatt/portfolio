import { Metadata } from "next";
import { ProjectsMap } from "@/components/ProjectsMap";

export const metadata: Metadata = {
    title: 'Portfolio | Projetos',
    description: 'Wildemberg Renovato portfolio',
}

export default function Projects() {
    return (
        <ProjectsMap />
    )
}