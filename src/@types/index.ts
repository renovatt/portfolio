import { z } from "zod";
import { contactSchema } from "@/zod";
import { StaticImageData } from "next/image";

type SkillsResponse = {
    skills: SkillsTypeProps[];
}

type SoftskillsResponse = {
    softskills: SoftskillsTypeProps[];
}

type ProjectsResponse = {
    projects: ProjectsTypeProps[];
}

type ProjectResponse = {
    project: ProjectsTypeProps;
}

type ProfileResponse = {
    profile: ProfileProps[];
}

type ErrorResponseProps = {
    error: string;
}

type TechsTypeProps = {
    id: string;
    svg_name: string;
    link: string;
    svg_link: string;
}

type LinksTypeProps = {
    links: TechsTypeProps[]
}

export type ContactProps = z.infer<typeof contactSchema>

export type APISkillsResponse = SkillsResponse | ErrorResponseProps;
export type APISoftskillsResponse = SoftskillsResponse | ErrorResponseProps;
export type APIProjectsResponse = ProjectsResponse | ErrorResponseProps;
export type APIProjectResponse = ProjectResponse | ErrorResponseProps;
export type APIProfileResponse = ProfileResponse | ErrorResponseProps;

export type ProjectsTypeProps = {
    id: string;
    order: number;
    project_name: string;
    deploy_url: string;
    banner_url: string;
    thumbnail_url: string;
    description: string;
    techs: LinksTypeProps;
}

export type SoftskillsTypeProps = {
    id: string;
    softskill_name: string;
}

export type SkillsTypeProps = {
    id: string;
    skill_name: string;
    svg_link: string;
    description: string;
}

export type ProfileProps = {
    id: string;
    description_1: string;
    description_2: string;
}

export type ContainerTypeProps = {
    children: React.ReactNode;
}

export type ImageProps = {
    src: StaticImageData;
    alt: string;
    className?: string;
}

export type ModalTypeProps = {
    id: string;
    closeModal: () => void;
    toggleModal: () => void;
}

export type MenuMobileTypeProps = {
    modal?: boolean;
    openModal?: () => void;
    closeModal?: () => void;
}

export type SoftskillComponentProps = {
    softskill: SoftskillsTypeProps,
    loading: boolean,
    error: boolean
}

export type SkillsIconsComponentProps = {
    skill: SkillsTypeProps;
    loading: boolean;
    error: boolean,
    onMouseOver: () => void;
    onMouseOut: () => void;
};

export type SkillsDescriptonProps = {
    skill: SkillsTypeProps,
    loading: boolean,
    error: boolean
}

export type DefaultDescriptonProps = {
    loading: boolean,
    error: boolean
}

export type ButtonComponentProps = {
    text: string;
    href?: string;
    onClick?: (id: string) => void;
}