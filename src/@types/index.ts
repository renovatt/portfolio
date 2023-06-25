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

export type LinksTypeProps = {
    links: TechsTypeProps[]
}

export type TechsTypeProps = {
    id: string;
    svg_name: string;
    link: string;
    svg_link: string;
}

export type SoftskillsTypeProps = {
    id: string;
    softskill_name: string;
}

export type SkillsTypeProps = {
    id: string;
    svg: string;
    link: string;
    skill_name: string;
    description: string;
}

export type CardContainerStyleProps = {
    banner_url: string;
}

export type ContainerTypeProps = {
    children: React.ReactNode;
}

export type ImageProps = {
    src: string;
    alt: string;
}

export type SkillDescriptonTypeProps = {
    skillName: string;
    skillDescription: string;
}

export type IconMapPros = {
    [key: string]: React.ReactNode;
}

export type ModalTypeProps = {
    id: string;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export type MenuMobileTypeProps = {
    mobileIsVisible: boolean;
    setMobileIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export type MenuMobileStyleProps = {
    isVisible: boolean;
}