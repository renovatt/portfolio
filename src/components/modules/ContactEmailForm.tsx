'use client'
import { useState } from 'react'
import Input from '@elements/Input'
import { ContactProps } from '@types'
import { contactSchema } from 'schemas'
import { toast } from 'react-toastify'
import TextArea from '@elements/TextArea'
import { sendMessageContact } from 'services'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import ErrorFormMessage from '@elements/ErrorFormMessage'
import ContactButtonForm from '@elements/ContactButtonForm'
import { motion } from 'framer-motion'

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
      <motion.form
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        onSubmit={methods.handleSubmit(handleMessage)}
        className="flex w-full flex-col justify-center gap-4 rounded-lg p-4 md:h-full md:max-w-xl"
      >
        <Input label="Nome" placeholder="Seu nome" name="name" type="text" />
        <ErrorFormMessage field="name" />

        <Input label="E-mail" placeholder="E-mail" name="email" type="email" />
        <ErrorFormMessage field="email" />

        <TextArea />
        <ErrorFormMessage field="message" />

        <ContactButtonForm loading={loading} />
      </motion.form>
    </FormProvider>
  )
}

export default ContactEmailForm
