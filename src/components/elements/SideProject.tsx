'use client'

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
      <h1 className="mb-8 text-4xl font-bold text-primary-950 md:text-5xl">
        Projetos
      </h1>
      <p className="text-secondary-850">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officia
        praesentium dolore quos nihil? Nemo consequuntur modi, eius ad non culpa
        voluptates quod aliquam, earum temporibus cupiditate placeat aut natus?
      </p>
      <p className="text-secondary-850">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officia
        praesentium dolore quos nihil? Nemo consequuntur modi, eius ad non culpa
        voluptates quod aliquam, earum temporibus cupiditate placeat aut natus?
      </p>
      <h3 className="font-bold text-primary-750">Lorem</h3>
      <p className="text-secondary-850">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officia
        praesentium dolore quos nihil? Nemo consequuntur modi, eius ad non culpa
        voluptates quod aliquam, earum temporibus cupiditate placeat aut natus?
      </p>
      <p className="text-secondary-850">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officia
        praesentium dolore quos nihil? Nemo consequuntur modi, eius ad non culpa
        voluptates quod aliquam, earum temporibus cupiditate placeat aut natus?
      </p>
    </motion.article>
  )
}
