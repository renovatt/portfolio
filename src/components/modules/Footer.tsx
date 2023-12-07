import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()
  return (
    <footer className="container flex h-20 w-full items-center justify-around border-t border-950  bg-950">
      <section className="flex">
        <span className="m-1 text-xs font-bold text-750 md:text-base">
          &copy; {currentYear} willcode | Powered by
        </span>
        <Link
          className="flex items-center text-xs font-bold text-750 hover:text-950 md:text-base"
          href="https://www.linkedin.com/in/renovatt"
          target="_blank"
        >
          renovatt
        </Link>
      </section>

      <section className="flex items-center justify-around gap-4">
        <Link
          className="flex items-center text-750"
          href="https://www.linkedin.com/in/renovatt"
          target="_blank"
        >
          <FaLinkedin className="h-6 w-6 text-750 transition-all ease-in hover:text-950" />
        </Link>

        <Link
          className="flex items-center text-750"
          href="https://github.com/renovatt"
          target="_blank"
        >
          <FaGithub className="h-6 w-6 text-750 transition-all ease-in hover:text-950" />
        </Link>
      </section>
    </footer>
  )
}

export default Footer
