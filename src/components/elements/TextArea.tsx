import { useFormContext } from 'react-hook-form'

const TextArea = () => {
  const { register } = useFormContext()
  return (
    <>
      <label
        className="flex items-center justify-between text-sm font-bold text-secondary-850"
        htmlFor="message"
      >
        Mensagem
      </label>
      <textarea
        className="max-h-24 flex-1 rounded border bg-primary-750 px-3 py-2 text-zinc-800 shadow-sm transition-all ease-in focus:outline-none focus:ring-2 focus:ring-secondary-950"
        cols={50}
        rows={10}
        maxLength={1000}
        {...register('message')}
        placeholder="Escreva sua mensagem"
      ></textarea>
    </>
  )
}

export default TextArea
