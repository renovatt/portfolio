'use client'
import Title from '@elements/Title'
import { motion } from 'framer-motion'

export default function SideProfile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="space-y-4"
    >
      <Title title="Quem sou eu" />
      <p className="text-850 text-justify text-base">
        Sou um desenvolvedor <span className="text-950">Front-End</span>{' '}
        especializado na criação de aplicações web modernas e responsivas.
        Mantenho uma mentalidade de aprendizado constante, sempre buscando
        atualizar minhas <span className="text-950">habilidades</span> para
        acompanhar as últimas <span className="text-950">tendências</span>{' '}
        tecnológicas. Além disso, prezo pela colaboração e estou sempre pronto
        para trabalhar em equipe, visando alcançar metas compartilhadas.
      </p>
      <p className="text-850 text-justify text-base">
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
