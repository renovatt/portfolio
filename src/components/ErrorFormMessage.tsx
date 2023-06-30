import { useFormContext } from 'react-hook-form'

interface ErrorFormMessageProps {
  field: string
}

function get(obj: Record<any, any>, path: string) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  
  return result
};

export function ErrorFormMessage({ field }: ErrorFormMessageProps) {
  const { formState: { errors } } = useFormContext()

  const fieldError = get(errors, field)
    
  if (!fieldError) {
    return null
  }

  return (
    <span className="text-xs text-red-500 mt-1 ml-2">{fieldError.message?.toString()}</span>
  )
}