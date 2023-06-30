import { Metadata } from "next";
import { SkillsWithSoftskills } from "@/components/SkillsWithSoftskills";

export const metadata: Metadata = {
    title: 'Portfolio | Skills & Softskills',
    description: 'Wildemberg Renovato portfolio',
}

export default function SkillsAndSoftskills() {
    return (
        <SkillsWithSoftskills />
    )
}