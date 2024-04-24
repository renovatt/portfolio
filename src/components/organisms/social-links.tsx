'use client'
import Link from 'next/link'
import { socialLinks } from '@static/routes'
import { motion } from 'framer-motion'
import { BoingContainer, BoingItem } from '@static/motion-variants'

const SocialLinks = () => {
  return (
    <motion.ul
      variants={BoingContainer()}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center gap-1 transition-all"
    >
      {socialLinks.map(({ path, icon: Icon }, index) => (
        <motion.li
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          key={index}
          variants={BoingItem({ value: -20 })}
        >
          <Link
            className="flex items-center text-750"
            href={path}
            target="_blank"
          >
            <Icon className="m-1 h-5 w-5 text-750 transition-all ease-in hover:text-950" />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default SocialLinks
