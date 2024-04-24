'use client'
import { BoingContainer, BoingItem } from '@static/motion-variants'
import RouteLink from '@molecules/router-link'
import { motion } from 'framer-motion'
import { routes } from 'static/routes'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className=" fixed bottom-0 left-0 z-50 mt-4 flex w-full items-center justify-between p-2 backdrop-blur-md md:absolute md:bottom-10 md:left-10 md:w-auto md:rounded-full md:border"
    >
      <motion.ul
        variants={BoingContainer()}
        initial="hidden"
        animate="visible"
        className="flex w-full items-center justify-between md:w-auto"
      >
        {routes.map((link, index) => (
          <motion.li
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            variants={BoingItem({ value: 20 })}
            key={index}
            className="m-2 p-2"
          >
            <RouteLink {...link} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  )
}

export default Navbar
