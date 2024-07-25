import { ProjectDto } from '@entities/project.dto'
import { BASE_URL, API_KEY } from '~static/env'
import { CustomError } from '@utils/custom-error'
import { isErrorMessageDto } from '@utils/type-guard-error'

export const getProjectsById = async (
  projectId: string,
): Promise<ProjectDto> => {
  try {
    const response = await fetch(
      `${BASE_URL}/renovatt/projects-public/${projectId}`,
      {
        method: 'GET',
        headers: {
          'x-api-key': API_KEY,
        },
        next: {
          revalidate: 5,
        },
      },
    )

    const data: ProjectDto = await response.json()

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
