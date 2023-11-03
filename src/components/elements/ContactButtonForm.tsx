import { FaSpinner } from 'react-icons/fa'
import { ButtonContactFormProps } from '@types'

const ContactButtonForm = ({ loading }: ButtonContactFormProps) => {
  return (
    <>
      {loading ? (
        <button
          type="button"
          className="mt-4 flex h-20 max-h-10 cursor-progress items-center justify-center rounded bg-backgroundPrimary px-3 py-2 text-white shadow-sm outline-none transition-all ease-in"
          disabled
        >
          <FaSpinner className="mr-3 h-5 w-5 animate-spin" />
          Enviando...
        </button>
      ) : (
        <input
          className="mt-4 h-20 max-h-10 flex-1 cursor-pointer rounded bg-backgroundPrimary px-3 py-2 text-white shadow-sm outline-none transition-all ease-in hover:bg-white hover:font-bold hover:text-textPrimary"
          placeholder="Seu nome"
          type="submit"
          value="Enviar mensagem"
        />
      )}
    </>
  )
}

export default ContactButtonForm
