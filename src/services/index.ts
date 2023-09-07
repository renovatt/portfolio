import {
  APIProfileResponse,
  APIProjectResponse,
  APIProjectsResponse,
  APISkillsResponse,
  APISoftskillsResponse,
  ErrorMessageResponse,
  ProjectResponse,
  ProjectsResponse,
  SkillsResponse,
  SoftskillsResponse,
  ContactProps,
} from '@/@types'

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!

export const getProjects = async (): Promise<APIProjectsResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/projects`)
    const data: ProjectsResponse = await response.json()

    if (response.ok) {
      return { projects: data.projects }
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

export const getProjectsById = async (
  id: string,
): Promise<APIProjectResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/projects/${id}`)
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

export const getSkills = async (): Promise<APISkillsResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/skills`)
    const data: SkillsResponse = await response.json()

    if (response.ok) {
      return { skills: data.skills }
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

export const getSoftskills = async (): Promise<APISoftskillsResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/softskills`)
    const data: SoftskillsResponse = await response.json()

    if (response.ok) {
      return { softskills: data.softskills }
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

export const getProfile = async (): Promise<APIProfileResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/profile`)
    const data = await response.json()

    if (response.ok) {
      return { profile: data.profile }
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
