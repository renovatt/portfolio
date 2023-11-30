import {
  ErrorMessageResponse,
  ProjectsResponse,
  SkillsResponse,
  ContactProps,
  ProfileResponse,
  ProjectResponse,
} from '@types'

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? ''

export const getProfile = async (): Promise<ProfileResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/profile`, {
      next: {
        revalidate: 30,
      },
    })
    const data: ProfileResponse = await response.json()

    if (response.ok) {
      return data
    } else {
      const error: ErrorMessageResponse = new Error(
        'Falha na solicitação com status: ' + response.status,
      )
      throw error
    }
  } catch (error) {
    const errorWithMessage: ErrorMessageResponse = new Error('Erro interno.')
    throw errorWithMessage
  }
}

export const getProjects = async (): Promise<ProjectsResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/projects`, {
      next: {
        revalidate: 30,
      },
    })
    const data: ProjectsResponse = await response.json()

    if (response.ok) {
      return data
    } else {
      const error: ErrorMessageResponse = new Error(
        'Falha na solicitação com status: ' + response.status,
      )
      throw error
    }
  } catch (error) {
    const errorWithMessage: ErrorMessageResponse = new Error('Erro interno.')
    throw errorWithMessage
  }
}

export const getProjectsById = async (id: string): Promise<ProjectResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/projects/${id}`, {
      next: {
        revalidate: 30,
      },
    })
    const data: ProjectResponse = await response.json()

    if (response.ok) {
      return data
    } else {
      const error: ErrorMessageResponse = new Error(
        'Falha na solicitação com status: ' + response.status,
      )
      throw error
    }
  } catch (error) {
    const errorWithMessage: ErrorMessageResponse = new Error('Erro interno.')
    throw errorWithMessage
  }
}

export const getSkills = async (): Promise<SkillsResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/skills`, {
      next: {
        revalidate: 30,
      },
    })
    const data: SkillsResponse = await response.json()

    if (response.ok) {
      return data
    } else {
      const error: ErrorMessageResponse = new Error(
        'Falha na solicitação com status: ' + response.status,
      )
      throw error
    }
  } catch (error) {
    const errorWithMessage: ErrorMessageResponse = new Error('Erro interno.')
    throw errorWithMessage
  }
}

export const sendMessageContact = async (data: ContactProps) => {
  try {
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const json = await res.json()

    if (res.ok) {
      return { response: json }
    } else {
      throw new Error(json.status)
    }
  } catch (error) {
    return { error: 'Aconteceu algum erro!' }
  }
}
