import { ErrorMessageDto } from '@entities/error.dto'

export class CustomError extends Error implements ErrorMessageDto {
  error: string
  statusCode: number

  constructor(message: string, error: string, statusCode: number) {
    super(message)
    this.error = error
    this.statusCode = statusCode
  }
}
