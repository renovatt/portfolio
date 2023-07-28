'use client'

import Input from './Input'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { ContactProps } from '@/@types'
import { contactSchema } from '@/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorFormMessage } from './ErrorFormMessage'
import { sendMessageContact } from '@/services'
import { FaGithub, FaLinkedin, FaSpinner } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import TextArea from './TextArea'
import { useState } from 'react'

const ContactForm = () => {
    const [loading, setLoading] = useState(false)

    const methods = useForm<ContactProps>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(contactSchema)
    })

    const handleMessage = async (data: ContactProps) => {
        setLoading(true)

        try {
            const { response, error } = await sendMessageContact(data);

            if (!response) {
                toast.error(error);
            }

            toast.success(response.message);
            methods.reset();
            setLoading(false)

        } catch (error) {
            toast.error('Algum erro desconhecido aconteceu.');
        }
    }

    return (
        <FormProvider {...methods}>
            <section className='flex flex-col md:flex-row md:justify-around justify-start items-center md:items-start w-[95%] h-[90%] max-w-[1400px] animate-fade transition-all'>
                <aside className='md:w-full md:max-w-xl max-w-xs h-full md:flex flex-col bg-backgroundThird m-8 rounded-lg p-4'>
                    <h1 className='text-textPrimary text-4xl md:text-5xl font-bold mb-8'>Contato</h1>
                    <h2 className='text-textDescription'>Entre em contato comigo ou deixe seu valioso feedback! Estou ansioso para ouvir suas opiniões e responder o mais rápido possível. Sinta-se à vontade para usar qualquer um dos métodos abaixo para se conectar comigo.</h2>

                    <section className='flex flex-col items-start justify-around mt-20 gap-4'>
                        <span className='flex items-center justify-center'>
                            <FaLinkedin className='h-6 w-6 text-white mr-2' />
                            <Link
                                className='flex items-center text-white hover:text-textPrimary transition-all ease-in'
                                href="https://www.linkedin.com/in/renovatt" target="_blank">
                                Linkedin
                            </Link>
                        </span>

                        <span className='flex items-center justify-center'>
                            <FaGithub className='h-6 w-6 text-white mr-2' />
                            <Link
                                className='flex items-center text-white hover:text-textPrimary transition-all ease-in'
                                href="https://github.com/renovatt" target="_blank">
                                GitHub
                            </Link>
                        </span>

                        <span className='flex items-center justify-center'>
                            <BiLogoGmail className='h-6 w-6 text-white mr-2' />
                            <Link
                                className='flex items-center text-white hover:text-textPrimary transition-all ease-in'
                                href="mailto:wlymes@gmail.com" target="_blank">
                                wlymes@gmail.com
                            </Link>
                        </span>
                    </section>
                </aside>

                <form
                    onSubmit={methods.handleSubmit(handleMessage)}
                    className="flex justify-center  flex-col gap-4 w-full h-full md:h-[30rem] max-w-xs bg-backgroundThird m-8 rounded-lg p-4">
                    <Input
                        label='Nome'
                        placeholder='Seu nome'
                        name='name'
                        type='text'
                    />
                    <ErrorFormMessage field='name' />

                    <Input
                        label='E-mail'
                        placeholder='E-mail'
                        name='email'
                        type='email'
                    />
                    <ErrorFormMessage field='email' />

                    <TextArea />
                    <ErrorFormMessage field='message' />

                    {loading ? (
                        <button type="button" className="flex justify-center items-center rounded shadow-sm px-3 py-2 outline-none transition-all ease-in bg-backgroundPrimary cursor-progress text-white h-20 mt-4 max-h-10" disabled>
                            <FaSpinner className='animate-spin h-5 w-5 mr-3' />
                            Enviando...
                        </button>
                    ) : (
                        <input
                            className='flex-1 rounded shadow-sm px-3 py-2 outline-none transition-all ease-in cursor-pointer bg-backgroundPrimary text-white hover:font-bold hover:bg-white hover:text-textPrimary h-20 mt-4 max-h-10'
                            placeholder='Seu nome'
                            type="submit"
                            value='Enviar mensagem'
                        />
                    )}
                </form>
            </section>
        </FormProvider>
    )
}

export default ContactForm;