import { useFormContext } from 'react-hook-form'

const TextArea = () => {
  const { register } = useFormContext()
  return (
    <>
      <label
        className="flex items-center justify-between text-sm font-bold text-850"
        htmlFor="message"
      >
        Mensagem
      </label>
      <textarea
        id="message"
        className="max-h-16 flex-1 rounded border bg-750 px-3 py-4 text-zinc-800 shadow-sm transition-all ease-in focus:outline-none focus:ring-2 focus:ring-950 md:max-h-24"
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
