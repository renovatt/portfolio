import { useFormContext } from 'react-hook-form'

const TextArea = () => {
    const { register } = useFormContext()

    return (
        <>
            <label className="text-sm text-textDescription flex font-bold items-center justify-between"
                htmlFor='message'>Mensagem</label>
            <textarea
                className='flex-1 rounded border shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-600 transition-all ease-in max-h-24'
                cols={50}
                rows={10}
                maxLength={1000}
                {...register('message')}
                placeholder='Escreva sua mensagem'
            >
            </textarea>
        </>
    )
}

export default TextArea