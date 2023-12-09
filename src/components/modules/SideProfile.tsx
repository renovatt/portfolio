'use client'
import { fadeIn } from '@constants/variants'
import Title from '@elements/Title'
import { motion } from 'framer-motion'

export default function SideProfile() {
  return (
    <motion.article
      variants={fadeIn({ direction: 'up', delay: 0.3 })}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-full space-y-4 pb-20 md:w-2/5 md:pb-0"
    >
      <Title title="Quem sou eu" />
      <p className="text-justify text-base text-850">
        Sou um desenvolvedor <span className="text-950">Front-End</span>{' '}
        especializado na criação de aplicações web modernas e responsivas.
        Mantenho uma mentalidade de aprendizado constante, sempre buscando
        atualizar minhas <span className="text-950">habilidades</span> para
        acompanhar as últimas <span className="text-950">tendências</span>{' '}
        tecnológicas. Além disso, prezo pela colaboração e estou sempre pronto
        para trabalhar em equipe, visando alcançar metas compartilhadas.
      </p>
      <p className="text-justify text-base text-850">
        Meu compromisso é aprimorar continuamente minhas habilidades e
        conhecimentos, garantindo que esteja sempre{' '}
        <span className="text-950">atualizado</span> no dinâmico campo da
        tecnologia. Estou confiante de que posso fazer uma contribuição
        significativa para o <span className="text-950">sucesso</span> de
        projetos e equipes.
      </p>
    </motion.article>
  )
}
