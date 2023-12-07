import { FaSpinner } from 'react-icons/fa'

const ContactButtonForm = ({ loading }: { loading: boolean }) => {
  return (
    <>
      {loading ? (
        <button
          type="button"
          className="bg-950 text-750 mt-4 flex max-h-16 cursor-progress items-center justify-center rounded px-3 py-4 shadow-sm outline-none transition-all ease-in"
          disabled
        >
          <FaSpinner className="mr-3 h-5 w-5 animate-spin" />
          Enviando...
        </button>
      ) : (
        <input
          className="bg-950 hover:text-950 text-750 hover:bg-750 mt-4 max-h-16 flex-1 cursor-pointer rounded px-3 py-4 shadow-sm outline-none transition-all ease-in hover:font-bold"
          placeholder="Seu nome"
          type="submit"
          value="Enviar mensagem"
        />
      )}
    </>
  )
}

export default ContactButtonForm
