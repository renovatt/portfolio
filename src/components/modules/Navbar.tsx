'use client'
import RouteLinks from '@elements/RouteLinks'
import { RiMenu3Line } from 'react-icons/ri'
import { MenuMobileTypeProps } from '@types'
import { motion } from 'framer-motion'
import { Links } from '@constants/Links'

const gridContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Navbar = ({ openModal }: MenuMobileTypeProps) => {
  return (
    <nav className="flex items-center justify-between">
      <motion.ul
        variants={gridContainer}
        initial="hidden"
        animate="visible"
        className="hidden md:items-center md:justify-between lg:flex"
      >
        {Links.map((link, index) => (
          <motion.li key={index} variants={item} className="m-2 p-2">
            <RouteLinks href={link.href} text={link.text} />
          </motion.li>
        ))}
      </motion.ul>

      <RiMenu3Line
        className="h-10 w-10 cursor-pointer rounded-md border border-primary-950 p-1 text-primary-750 transition-all ease-in hover:text-primary-950 md:hidden"
        onClick={openModal}
      />
    </nav>
  )
}

export default Navbar
