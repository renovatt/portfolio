import { CustomError } from '@utils/custom-error'

interface ErrorMessageProps {
  error: CustomError
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="my-10 mb-20 flex flex-col items-start justify-center">
      <p className="text-white">Error: {error.error}</p>
      <p className="text-white">Message: {error.message}</p>
      <p className="text-white">Status Code: {error.statusCode}</p>
    </div>
  )
}

export default ErrorMessage
