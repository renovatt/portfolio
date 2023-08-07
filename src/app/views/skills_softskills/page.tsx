import { Metadata } from "next";
import SkillsWithSoftskills from "@/app/components/SkillsWithSoftskills";

export const metadata: Metadata = {
    title: 'WillCode | Skills & Softskills',
    description: 'Conheça as habilidades técnicas e competências interpessoais de Wildemberg Renovato de Lima no WillCode. De programação e desenvolvimento web a comunicação e trabalho em equipe, prepare-se para descobrir como essas habilidades podem agregar valor aos projetos.',
}

export default function SkillsAndSoftskills() {
    return <SkillsWithSoftskills />
}