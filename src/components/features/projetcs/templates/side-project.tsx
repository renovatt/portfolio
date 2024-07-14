'use client'
import Title from '@atoms/title'
import { motion } from 'framer-motion'
import { fadeIn } from '~static/motion-variants'

const SideProject = () => {
  return (
    <motion.article
      variants={fadeIn({ direction: 'up', delay: 0.3 })}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-full space-y-2 md:w-2/5"
    >
      <Title title="Projetos" />
      <p className="text-justify text-base text-850">
        Sempre me envolvo em novas criações, pois a prática constante é a{' '}
        <span className="text-950">chave</span> para o crescimento contínuo e a
        manutenção do conhecimento.
      </p>
      <p className="text-justify text-base text-850">
        Aqui, compartilho alguns projetos destacados, softwares que não apenas
        representam meu trabalho, mas <span className="text-950">soluções</span>{' '}
        reais para desafios.
      </p>
      <p className="text-justify text-base text-850">
        Refatorei projetos para incorporar novos aprendizados, participei
        ativamente em projetos <span className="text-950">voluntários</span> e
        realizei trabalhos <span className="text-950">freelancers</span>.
      </p>
      <p className="text-justify text-base text-850">
        Cada projeto conta uma parte única da minha jornada, refletindo não
        apenas habilidades técnicas, mas também{' '}
        <span className="text-950">paixão</span> e{' '}
        <span className="text-950">dedicação</span>.
      </p>
    </motion.article>
  )
}

export default SideProject
