'use client'
import Input from './Input'
import TextArea from './TextArea'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { contactSchema } from '@/zod'
import { ContactProps } from '@/@types'
import { sendMessageContact } from '@/services'
import ErrorFormMessage from './ErrorFormMessage'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import ContactButtonForm from './ContactButtonForm'

const ContactEmailForm = () => {
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
      if (!response) toast.error(error)

      toast.success(response.message)
      methods.reset()
      setLoading(false)
    } catch (error) {
      toast.error('Algum erro desconhecido aconteceu.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        data-aos="fade-right"
        data-aos-delay="100"
        onSubmit={methods.handleSubmit(handleMessage)}
        className="m-8 flex  h-full w-full max-w-xs flex-col justify-center gap-4 rounded-lg bg-backgroundThird p-4 md:h-[30rem]"
      >
        <Input label="Nome" placeholder="Seu nome" name="name" type="text" />
        <ErrorFormMessage field="name" />

        <Input label="E-mail" placeholder="E-mail" name="email" type="email" />
        <ErrorFormMessage field="email" />

        <TextArea />
        <ErrorFormMessage field="message" />

        <ContactButtonForm loading={loading} />
      </form>
    </FormProvider>
  )
}

export default ContactEmailForm
