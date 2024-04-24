import { StacksResponseDto } from '@entities/stack.dto'
import { BASE_URL, API_KEY } from '@static/env'
import { CustomError } from '@utils/custom-error'
import { isErrorMessageDto } from '@utils/type-guard-error'

export const getStacks = async (): Promise<StacksResponseDto> => {
  try {
    const response = await fetch(`${BASE_URL}/stacks-public`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
      next: {
        revalidate: 30,
      },
    })

    const data: StacksResponseDto = await response.json()

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
