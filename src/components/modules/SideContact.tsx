'use client'
import { fadeIn } from '@constants/variants'
import Title from '@elements/Title'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BiLogoGmail } from 'react-icons/bi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const SideContact = () => {
  return (
    <motion.aside
      variants={fadeIn({ direction: 'right', delay: 0.3 })}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-full space-y-2 md:h-full md:w-2/5"
    >
      <Title title="Contato" />
      <p className="text-justify text-base text-850">
        Se você tem um projeto interessante, uma{' '}
        <span className="text-950">ideia</span> inovadora ou apenas quer trocar
        experiências sobre o fascinante mundo do desenvolvimento, ficarei feliz
        em ouvir de você. Minha missão é criar{' '}
        <span className="text-950">soluções</span> eficientes e impactantes, e
        estou pronto para contribuir para o sucesso do seu projeto.
      </p>

      <p className="text-justify text-base text-850">
        Sinta-se à vontade para preencher o formulário abaixo ou me{' '}
        <span className="text-950">contatar</span> através dos meios
        disponíveis. Estou ansioso para iniciar uma conversa e explorar as
        possibilidades de <span className="text-950">trabalharmos</span> juntos.
      </p>
      <p className="text-justify text-base text-850">
        Vamos construir algo incrível!
      </p>

      <section className="mt-10 flex flex-col items-start justify-around gap-4">
        <span className="flex items-center justify-center">
          <FaLinkedin className="mr-2 h-6 w-6 text-750" />
          <Link
            className="flex items-center text-750 transition-all ease-in hover:text-950"
            href="https://www.linkedin.com/in/renovatt"
            target="_blank"
          >
            Linkedin
          </Link>
        </span>

        <span className="flex items-center justify-center">
          <FaGithub className="mr-2 h-6 w-6 text-750" />
          <Link
            className="flex items-center text-750 transition-all ease-in hover:text-950"
            href="https://github.com/renovatt"
            target="_blank"
          >
            GitHub
          </Link>
        </span>

        <span className="flex items-center justify-center">
          <BiLogoGmail className="mr-2 h-6 w-6 text-750" />
          <Link
            className="flex items-center text-750 transition-all ease-in hover:text-950"
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

export default SideContact
