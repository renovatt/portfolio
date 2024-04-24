import { ErrorMessageDto } from '@entities/error.dto'
import { ProjectDto, ProjectResponseDto } from '@entities/project.dto'
import { StacksResponseDto } from '@entities/stack.dto'

export function isErrorMessageDto(
  object: ProjectResponseDto | StacksResponseDto | ProjectDto | ErrorMessageDto,
): object is ErrorMessageDto {
  return 'error' in object
}
