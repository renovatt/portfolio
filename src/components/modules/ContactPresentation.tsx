import Link from 'next/link'
import { BiLogoGmail } from 'react-icons/bi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactPresentation = () => {
  return (
    <aside
      data-aos="fade-up"
      data-aos-delay="50"
      className="m-2 h-full max-w-xs flex-col rounded-lg bg-primary-850 p-4 md:flex md:w-full md:max-w-xl"
    >
      <h1 className="mb-8 text-4xl font-bold text-primary-950 md:text-5xl">
        Contato
      </h1>
      <h2 className="text-secondary-850">
        Entre em contato comigo ou deixe seu valioso feedback! Estou ansioso
        para ouvir suas opiniões e responder o mais rápido possível. Sinta-se à
        vontade para usar qualquer um dos métodos abaixo para se conectar
        comigo.
      </h2>

      <section className="mt-20 flex flex-col items-start justify-around gap-4">
        <span className="flex items-center justify-center">
          <FaLinkedin className="mr-2 h-6 w-6 text-primary-750" />
          <Link
            className="flex items-center text-primary-750 transition-all ease-in hover:text-primary-950"
            href="https://www.linkedin.com/in/renovatt"
            target="_blank"
          >
            Linkedin
          </Link>
        </span>

        <span className="flex items-center justify-center">
          <FaGithub className="mr-2 h-6 w-6 text-primary-750" />
          <Link
            className="flex items-center text-primary-750 transition-all ease-in hover:text-primary-950"
            href="https://github.com/renovatt"
            target="_blank"
          >
            GitHub
          </Link>
        </span>

        <span className="flex items-center justify-center">
          <BiLogoGmail className="mr-2 h-6 w-6 text-primary-750" />
          <Link
            className="flex items-center text-primary-750 transition-all ease-in hover:text-primary-950"
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
