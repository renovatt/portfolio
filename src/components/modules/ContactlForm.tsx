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
import { fadeIn } from '@constants/variants'
import Field from '@elements/Field'

const ContactlForm = () => {
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
        variants={fadeIn({ direction: 'left', delay: 0.3 })}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onSubmit={methods.handleSubmit(handleMessage)}
        className="flex w-full max-w-xl flex-col justify-center gap-2 p-4 pb-20 md:pb-0"
      >
        <Field>
          <Input label="Nome" placeholder="Seu nome" name="name" type="text" />
          <span className="flex h-5 w-full items-start justify-start">
            <ErrorFormMessage field="name" />
          </span>
        </Field>

        <Field>
          <Input
            label="E-mail"
            placeholder="E-mail"
            name="email"
            type="email"
          />
          <span className="flex h-5 w-full items-start justify-start">
            <ErrorFormMessage field="email" />
          </span>
        </Field>

        <Field>
          <TextArea />
          <span className="flex h-5 w-full items-start justify-start">
            <ErrorFormMessage field="message" />
          </span>
        </Field>

        <ContactButtonForm loading={loading} />
      </motion.form>
    </FormProvider>
  )
}

export default ContactlForm
