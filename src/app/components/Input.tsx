import { useFormContext } from 'react-hook-form'

export type InputProps = {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

const Input = ({ ...props }: InputProps) => {
    const { register } = useFormContext()

    return (
        <>
            <label
                className="text-sm text-textDescription flex font-bold items-center justify-between"
                htmlFor={props.label}>{props.label}</label>
            <input
                className='flex-1 rounded border shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-600 transition-all ease-in max-h-10'
                {...register(props.name)}
                {...props}
            />
        </>
    )
}

export default Input