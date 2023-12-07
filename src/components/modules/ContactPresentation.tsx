'use client'
import Title from '@elements/Title'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BiLogoGmail } from 'react-icons/bi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactPresentation = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="h-full w-full space-y-2 md:w-2/5"
    >
      <Title title="Contato" />
      <p className="text-850 text-justify text-base">
        Se você tem um projeto interessante, uma{' '}
        <span className="text-950">ideia</span> inovadora ou apenas quer trocar
        experiências sobre o fascinante mundo do desenvolvimento, ficarei feliz
        em ouvir de você. Minha missão é criar{' '}
        <span className="text-950">soluções</span> eficientes e impactantes, e
        estou pronto para contribuir para o sucesso do seu projeto.
      </p>

      <p className="text-850 text-justify text-base">
        Sinta-se à vontade para preencher o formulário abaixo ou me{' '}
        <span className="text-950">contatar</span> através dos meios
        disponíveis. Estou ansioso para iniciar uma conversa e explorar as
        possibilidades de <span className="text-950">trabalharmos</span> juntos.
      </p>
      <p className="text-850 text-justify text-base">
        Vamos construir algo incrível!
      </p>

      <section className="mt-10 flex flex-col items-start justify-around gap-4">
        <span className="flex items-center justify-center">
          <FaLinkedin className="text-750 mr-2 h-6 w-6" />
          <Link
            className="hover:text-950 text-750 flex items-center transition-all ease-in"
            href="https://www.linkedin.com/in/renovatt"
            target="_blank"
          >
            Linkedin
          </Link>
        </span>

        <span className="flex items-center justify-center">
          <FaGithub className="text-750 mr-2 h-6 w-6" />
          <Link
            className="hover:text-950 text-750 flex items-center transition-all ease-in"
            href="https://github.com/renovatt"
            target="_blank"
          >
            GitHub
          </Link>
        </span>

        <span className="flex items-center justify-center">
          <BiLogoGmail className="text-750 mr-2 h-6 w-6" />
          <Link
            className="hover:text-950 text-750 flex items-center transition-all ease-in"
            href="mailto:wlymes@gmail.com"
            target="_blank"
          >
            wlymes@gmail.com
          </Link>
        </span>
      </section>
    </motion.aside>
  )
}

export default ContactPresentation
