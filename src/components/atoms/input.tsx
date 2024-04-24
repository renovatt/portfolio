import { useFormContext } from 'react-hook-form'

export type InputProps = {
  name: string
  label: string
  type: string
  placeholder: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ ...props }: InputProps) => {
  const { register } = useFormContext()

  return (
    <>
      <label
        className="flex items-center justify-between text-sm font-bold text-850"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        id={props.label}
        className="h-16 max-h-16 w-full flex-1 rounded border bg-750 px-3 py-4 text-zinc-800 shadow-sm transition-all ease-in focus:outline-none focus:ring-2 focus:ring-950"
        {...register(props.name)}
        {...props}
      />
    </>
  )
}

export default Input
