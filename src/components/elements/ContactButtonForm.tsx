import { FaSpinner } from 'react-icons/fa'

const ContactButtonForm = ({ loading }: { loading: boolean }) => {
  return (
    <>
      {loading ? (
        <button
          type="button"
          className="mt-4 flex max-h-16 cursor-progress items-center justify-center rounded bg-950 px-3 py-4 text-750 opacity-70 shadow-sm outline-none transition-all ease-in"
          disabled
        >
          <FaSpinner className="mr-3 h-5 w-5 animate-spin" />
          Enviando...
        </button>
      ) : (
        <input
          className="mt-4 max-h-16 flex-1 cursor-pointer rounded bg-950 px-3 py-4 text-750 shadow-sm outline-none transition-all ease-in hover:bg-750 hover:font-bold hover:text-950"
          placeholder="Seu nome"
          type="submit"
          value="Enviar mensagem"
        />
      )}
    </>
  )
}

export default ContactButtonForm
