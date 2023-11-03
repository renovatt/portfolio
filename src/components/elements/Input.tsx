import { useFormContext } from 'react-hook-form'

export type InputProps = {
  name: string
  label: string
  type: string
  placeholder: string
}

const Input = ({ ...props }: InputProps) => {
  const { register } = useFormContext()

  return (
    <>
      <label
        className="flex items-center justify-between text-sm font-bold text-textDescription"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        className="max-h-10 flex-1 rounded border px-3 py-2 text-zinc-800 shadow-sm transition-all ease-in focus:outline-none focus:ring-2 focus:ring-pink-600"
        {...register(props.name)}
        {...props}
      />
    </>
  )
}

export default Input
