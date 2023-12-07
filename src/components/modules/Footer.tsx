import Link from 'next/link'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()
  return (
    <footer className="absolute bottom-1 right-4 hidden items-center justify-around opacity-20 lg:flex">
      <span className="m-1 text-xs font-bold text-750">
        &copy; {currentYear} Powered by
      </span>
      <Link
        className="flex items-center text-xs font-bold text-750 hover:text-950"
        href="https://www.linkedin.com/in/renovatt"
        target="_blank"
      >
        renovatt
      </Link>
    </footer>
  )
}

export default Footer
