import { z } from 'zod'
import { ReactNode } from 'react'
import { contactSchema } from 'schemas'
import { StaticImageData } from 'next/image'

type TechsTypeProps = {
  id: string
  svg_name: string
  link: string
  svg_link: string
}

type LinksTypeProps = {
  links: TechsTypeProps[]
}

export type ProjectsTypeProps = {
  id: string
  order: number
  project_name: string
  deploy_url: string
  banner_url: string
  thumbnail_url: string
  description: string
  techs: LinksTypeProps
}

export type SoftskillsTypeProps = {
  id: string
  softskill_name: string
}

export type SkillsTypeProps = {
  id: string
  skill_name: string
  svg_link: string
  description: string
}

export type ProfileProps = {
  id: string
  description_1: string
  description_2: string
}

export type ProfileResponse = {
  profile: ProfileProps[]
}

export type SkillsResponse = {
  skills: SkillsTypeProps[]
}

export type SoftskillsResponse = {
  softskills: SoftskillsTypeProps[]
}

export type ProjectsResponse = {
  projects: ProjectsTypeProps[]
}

export type ProjectResponse = ProjectsTypeProps

export interface ErrorMessageResponse extends Error {
  message: string
}

export type ContactProps = z.infer<typeof contactSchema>

export type ReactQueryProviderProps = {
  children: ReactNode
}

export type ContainerTypeProps = {
  children: React.ReactNode
}

export type ImageProps = {
  src: StaticImageData
  alt: string
  className?: string
}

export type MenuMobileTypeProps = {
  modal?: boolean
  openModal?: () => void
  closeModal?: () => void
}

export type RouteLinksProps = {
  text: string
  href: string
  onClick?: () => void
}

type UseStoreState = {
  status: {
    isDefault: boolean
    isHovered: boolean
    skillId: string
  }
}

type UseStoreActions = {
  setStatus: (skillId: string) => void
  clearStatus: () => void
}

export type UseStoreProps = UseStoreState & UseStoreActions

export type Container3DProps = {
  children: ReactNode
}

export type CanvaContainerProps = {
  children: ReactNode
}

export type ButtonContactFormProps = {
  loading: boolean
}
