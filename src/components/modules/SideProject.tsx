'use client'
import Title from '@elements/Title'
import { motion } from 'framer-motion'

export default function SideProject() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="h-full w-full space-y-2 md:w-2/5"
    >
      <Title title="Projetos" />
      <p className="text-850 text-justify text-base">
        Sempre me envolvo em novas criações, pois a prática constante é a{' '}
        <span className="text-950">chave</span> para o crescimento contínuo e a
        manutenção do conhecimento.
      </p>
      <p className="text-850 text-justify text-base">
        Aqui, compartilho alguns projetos destacados, softwares que não apenas
        representam meu trabalho, mas <span className="text-950">soluções</span>{' '}
        reais para desafios.
      </p>
      <p className="text-850 text-justify text-base">
        Refatorei projetos para incorporar novos aprendizados, participei
        ativamente em projetos <span className="text-950">voluntários</span> e
        também tenho aqueles com um toque mais{' '}
        <span className="text-950">nostálgico</span>.
      </p>
      <p className="text-850 text-justify text-base">
        Cada projeto conta uma parte única da minha jornada, refletindo não
        apenas habilidades técnicas, mas também{' '}
        <span className="text-950">paixão</span> e{' '}
        <span className="text-950">dedicação</span>.
      </p>
    </motion.article>
  )
}
