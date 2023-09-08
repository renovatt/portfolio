import Link from 'next/link'
import { BiLogoGmail } from 'react-icons/bi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactPresentation = () => {
  return (
    <aside
      data-aos="fade-up"
      data-aos-delay="50"
      className="m-8 h-full max-w-xs flex-col rounded-lg bg-backgroundThird p-4 md:flex md:w-full md:max-w-xl"
    >
      <h1 className="mb-8 text-4xl font-bold text-textPrimary md:text-5xl">
        Contato
      </h1>
      <h2 className="text-textDescription">
        Entre em contato comigo ou deixe seu valioso feedback! Estou ansioso
        para ouvir suas opiniões e responder o mais rápido possível. Sinta-se à
        vontade para usar qualquer um dos métodos abaixo para se conectar
        comigo.
      </h2>

      <section className="mt-20 flex flex-col items-start justify-around gap-4">
        <span className="flex items-center justify-center">
          <FaLinkedin className="mr-2 h-6 w-6 text-white" />
          <Link
            className="flex items-center text-white transition-all ease-in hover:text-textPrimary"
            href="https://www.linkedin.com/in/renovatt"
            target="_blank"
          >
            Linkedin
          </Link>
        </span>

        <span className="flex items-center justify-center">
          <FaGithub className="mr-2 h-6 w-6 text-white" />
          <Link
            className="flex items-center text-white transition-all ease-in hover:text-textPrimary"
            href="https://github.com/renovatt"
            target="_blank"
          >
            GitHub
          </Link>
        </span>

        <span className="flex items-center justify-center">
          <BiLogoGmail className="mr-2 h-6 w-6 text-white" />
          <Link
            className="flex items-center text-white transition-all ease-in hover:text-textPrimary"
            href="mailto:wlymes@gmail.com"
            target="_blank"
          >
            wlymes@gmail.com
          </Link>
        </span>
      </section>
    </aside>
  )
}

export default ContactPresentation
