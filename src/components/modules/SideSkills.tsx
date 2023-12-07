'use client'
import Title from '@elements/Title'
import { motion } from 'framer-motion'

export default function SideSkills() {
  return (
    <motion.article
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="w-full space-y-2 md:h-full md:w-2/5"
    >
      <Title title="Habilidades" />
      <p className="text-850 text-justify text-base">
        Em minha trajetória profissional, concentro minha paixão e habilidades
        no desenvolvimento <span className="text-950">Front-End</span>, com um
        enfoque especial em <span className="text-950">Next.js</span>. Essa
        escolha estratégica está ancorada na minha busca incessante pela
        excelência, não apenas na construção de interfaces visualmente
        atraentes, mas também na criação de experiências de usuário fluidas e
        inovadoras.
      </p>
      <p className="text-850 text-justify text-base">
        Em um cenário onde a tecnologia avança a passos largos, mantenho-me em
        constante busca pelo <span className="text-950">conhecimento</span> e
        atualização. Estar à frente das últimas tendências e tecnologias é uma
        prioridade, pois compreendo que a{' '}
        <span className="text-950">inovação</span> é a chave para criar
        interfaces que não apenas seguem, mas também moldam o futuro digital.
      </p>
    </motion.article>
  )
}
