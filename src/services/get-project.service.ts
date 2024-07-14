import { ProjectResponseDto } from '@entities/project.dto'
import { BASE_URL, API_KEY } from '~static/env'
import { CustomError } from '@utils/custom-error'
import { isErrorMessageDto } from '@utils/type-guard-error'

export const getProjects = async (): Promise<ProjectResponseDto> => {
  try {
    const response = await fetch(`${BASE_URL}/projects-public`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
      next: {
        revalidate: 5,
      },
    })

    const data: ProjectResponseDto = await response.json()

    if (isErrorMessageDto(data)) {
      throw new CustomError(data.message, data.error, response.status)
    }

    return data
  } catch (error) {
    if (error instanceof CustomError) {
      throw error
    }
    throw new Error('Erro interno: ' + error)
  }
}
