'use client'

import Input from './Input'
import Link from 'next/link'
import TextArea from './TextArea'
import ErrorFormMessage from './ErrorFormMessage'
import { useState } from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { toast } from 'react-toastify'
import { contactSchema } from '@/zod'
import { ContactProps } from '@/@types'
import { sendMessageContact } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaGithub, FaLinkedin, FaSpinner } from 'react-icons/fa'
import { FormProvider, useForm } from 'react-hook-form'

const ContactForm = () => {
  const [loading, setLoading] = useState(false)

  const methods = useForm<ContactProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(contactSchema),
  })

  const handleMessage = async (data: ContactProps) => {
    setLoading(true)

    try {
      const { response, error } = await sendMessageContact(data)

      if (!response) {
        toast.error(error)
      }

      toast.success(response.message)
      methods.reset()
      setLoading(false)
    } catch (error) {
      toast.error('Algum erro desconhecido aconteceu.')
    }
  }

  return (
    <FormProvider {...methods}>
      <section className="flex h-[90%] w-[95%] max-w-[1400px] animate-fade flex-col items-center justify-start transition-all md:flex-row md:items-start md:justify-around">
        <aside
          data-aos="fade-up"
          data-aos-delay="50"
          className="m-8 h-full max-w-xs flex-col rounded-lg bg-backgroundThird p-4 md:flex md:w-full md:max-w-xl"
        >
          <h1 className="mb-8 text-4xl font-bold text-textPrimary md:text-5xl">
            Contato
          </h1>
          <h2 className="text-textDescription">
            Entre em contato comigo ou deixe seu valioso feedback! Estou ansioso
            para ouvir suas opiniões e responder o mais rápido possível.
            Sinta-se à vontade para usar qualquer um dos métodos abaixo para se
            conectar comigo.
          </h2>

          <section className="mt-20 flex flex-col items-start justify-around gap-4">
            <span className="flex items-center justify-center">
              <FaLinkedin className="mr-2 h-6 w-6 text-white" />
              <Link
                className="flex items-center text-white transition-all ease-in hover:text-textPrimary"
                href="https://www.linkedin.com/in/renovatt"
                target="_blank"
              >
                Linkedin
              </Link>
            </span>

            <span className="flex items-center justify-center">
              <FaGithub className="mr-2 h-6 w-6 text-white" />
              <Link
                className="flex items-center text-white transition-all ease-in hover:text-textPrimary"
                href="https://github.com/renovatt"
                target="_blank"
              >
                GitHub
              </Link>
            </span>

            <span className="flex items-center justify-center">
              <BiLogoGmail className="mr-2 h-6 w-6 text-white" />
              <Link
                className="flex items-center text-white transition-all ease-in hover:text-textPrimary"
                href="mailto:wlymes@gmail.com"
                target="_blank"
              >
                wlymes@gmail.com
              </Link>
            </span>
          </section>
        </aside>

        <form
          data-aos="fade-right"
          data-aos-delay="100"
          onSubmit={methods.handleSubmit(handleMessage)}
          className="m-8 flex  h-full w-full max-w-xs flex-col justify-center gap-4 rounded-lg bg-backgroundThird p-4 md:h-[30rem]"
        >
          <Input label="Nome" placeholder="Seu nome" name="name" type="text" />
          <ErrorFormMessage field="name" />

          <Input
            label="E-mail"
            placeholder="E-mail"
            name="email"
            type="email"
          />
          <ErrorFormMessage field="email" />

          <TextArea />
          <ErrorFormMessage field="message" />

          {loading ? (
            <button
              type="button"
              className="mt-4 flex h-20 max-h-10 cursor-progress items-center justify-center rounded bg-backgroundPrimary px-3 py-2 text-white shadow-sm outline-none transition-all ease-in"
              disabled
            >
              <FaSpinner className="mr-3 h-5 w-5 animate-spin" />
              Enviando...
            </button>
          ) : (
            <input
              className="mt-4 h-20 max-h-10 flex-1 cursor-pointer rounded bg-backgroundPrimary px-3 py-2 text-white shadow-sm outline-none transition-all ease-in hover:bg-white hover:font-bold hover:text-textPrimary"
              placeholder="Seu nome"
              type="submit"
              value="Enviar mensagem"
            />
          )}
        </form>
      </section>
    </FormProvider>
  )
}

export default ContactForm
