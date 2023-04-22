export type ProjectsTypeProps = {
    id: string;
    name: string;
    link: string;
    banner: string;
    thumbnail: string;
    description: string;
}

export type SkillsTypeProps = {
    id: string;
    svg: string;
    link: string;
    skill_name: string;
    description: string;
}

export type SoftskillsTypeProps = {
    id: string;
    name: string;
}

export type CardContainerStyleProps = {
    banner: string;
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