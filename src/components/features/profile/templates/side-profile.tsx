'use client'
import Title from '@atoms/title'
import { motion } from 'framer-motion'
import { fadeIn } from '~static/motion-variants'

const SideProfile = () => {
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
        Sou desenvolvedor <span className="text-950">Front-End</span>{' '}
        especializado na criação de aplicações web modernas e responsivas. Com
        uma mentalidade de aprendizado constante, mantenho minhas{' '}
        <span className="text-950">habilidades</span> atualizadas com as últimas{' '}
        <span className="text-950">tendências</span> tecnológicas. Meu foco é
        garantir a usabilidade, performance e a manutenção de código limpo e{' '}
        <span className="text-950">eficiente</span>.
      </p>
      <p className="text-justify text-base text-850">
        Com uma base sólida de conhecimentos e experiência, estou confiante na
        minha <span className="text-950">capacidade</span> de contribuir
        significativamente para o <span className="text-950">sucesso</span> de
        projetos e equipes. Estou preparado para enfrentar desafios complexos e
        entregar <span className="text-950">soluções</span> de alta{' '}
        <span className="text-950">qualidade</span>.
      </p>
    </motion.article>
  )
}

export default SideProfile
