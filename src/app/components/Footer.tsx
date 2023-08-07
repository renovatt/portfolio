import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <footer className='flex items-center justify-around h-20 border-t border-borderPrimary  bg-backgroundSecundary'>
            <section className='flex'>
                <span className='m-1 text-white font-bold'>&copy; {currentYear} willcode | Powered by</span>
                <Link
                    className='flex items-center text-white hover:text-textPrimary font-bold'
                    href="https://www.linkedin.com/in/renovatt" target="_blank">
                    renovatt
                </Link>
            </section>

            <section className='flex items-center justify-around gap-4'>
                <Link
                    className='flex items-center text-white'
                    href="https://www.linkedin.com/in/renovatt" target="_blank">
                    <FaLinkedin className='h-6 w-6 text-white hover:text-textPrimary transition-all ease-in' />
                </Link>

                <Link
                    className='flex items-center text-white'
                    href="https://github.com/renovatt" target="_blank">
                    <FaGithub className='h-6 w-6 text-white hover:text-textPrimary transition-all ease-in' />
                </Link>
            </section>
        </footer>
    )
}

export default Footer
