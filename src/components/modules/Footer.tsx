import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()
  return (
    <footer className="border-950 bg-950 container flex h-20 w-full items-center justify-around  border-t">
      <section className="flex">
        <span className="text-750 m-1 text-xs font-bold md:text-base">
          &copy; {currentYear} willcode | Powered by
        </span>
        <Link
          className="hover:text-950 text-750 flex items-center text-xs font-bold md:text-base"
          href="https://www.linkedin.com/in/renovatt"
          target="_blank"
        >
          renovatt
        </Link>
      </section>

      <section className="flex items-center justify-around gap-4">
        <Link
          className="text-750 flex items-center"
          href="https://www.linkedin.com/in/renovatt"
          target="_blank"
        >
          <FaLinkedin className="hover:text-950 text-750 h-6 w-6 transition-all ease-in" />
        </Link>

        <Link
          className="text-750 flex items-center"
          href="https://github.com/renovatt"
          target="_blank"
        >
          <FaGithub className="hover:text-950 text-750 h-6 w-6 transition-all ease-in" />
        </Link>
      </section>
    </footer>
  )
}

export default Footer
