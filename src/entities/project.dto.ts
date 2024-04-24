type Stacks = {
  iconUrl: string
}

export type ProjectDto = {
  userId: string
  id: string
  name: string
  description: string
  bannerUrl: string
  thumbnailUrl: string
  deployedUrl: string
  githubUrl: string
  position: number
  stacks: Stacks[]
}

export type ProjectResponseDto = ProjectDto[]
