'use client'
import { BoingContainer, BoingItem } from '@constants/variants'
import RouteLinks from '@elements/RouteLinks'
import { motion } from 'framer-motion'
import { PathLinks } from 'mocks/Links'

const Navbar = () => {
  return (
    <nav className="animate__animated animate__fadeInUp fixed bottom-0 left-0 z-50 mt-4 flex w-full items-center justify-between p-2 backdrop-blur-md md:absolute md:bottom-10 md:left-10 md:w-auto md:rounded-full md:border">
      <motion.ul
        variants={BoingContainer()}
        initial="hidden"
        animate="visible"
        className="flex w-full items-center justify-between md:w-auto"
      >
        {PathLinks.map((link, index) => (
          <motion.li
            variants={BoingItem({ value: 20 })}
            key={index}
            className="m-2 p-2"
          >
            <RouteLinks {...link} />
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  )
}

export default Navbar
