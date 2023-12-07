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
        className="text-850 flex items-center justify-between text-sm font-bold"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        id={props.label}
        className="focus:ring-950 bg-750 h-16 max-h-16 flex-1 rounded border px-3 py-4 text-zinc-800 shadow-sm transition-all ease-in focus:outline-none focus:ring-2"
        {...register(props.name)}
        {...props}
      />
    </>
  )
}

export default Input
