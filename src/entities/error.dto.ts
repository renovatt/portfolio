export interface ErrorMessageDto extends Error {
  message: string
  error: string
  statusCode: number
}
