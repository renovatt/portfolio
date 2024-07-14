'use client'
import { useState } from 'react'
import Field from '../atoms/field'
import Input from '../atoms/input'
import Button from '../atoms/button'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import TextArea from '../atoms/text-area'
import { fadeIn } from 'static/motion-variants'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail } from 'services/send-email.service'
import { FormProvider, useForm } from 'react-hook-form'
import ErrorInputMessage from '../atoms/error-input-message'
import { ContactDto, contactSchema } from 'schemas/contact-schema'

const Form = () => {
  const [loading, setLoading] = useState(false)

  const methods = useForm<ContactDto>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(contactSchema),
  })

  const handleMessage = async (data: ContactDto) => {
    setLoading(true)
    try {
      const { response, error } = await sendEmail(data)
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
            <ErrorInputMessage field="name" />
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
            <ErrorInputMessage field="email" />
          </span>
        </Field>

        <Field>
          <TextArea />
          <span className="flex h-5 w-full items-start justify-start">
            <ErrorInputMessage field="message" />
          </span>
        </Field>

        <Button loading={loading} />
      </motion.form>
    </FormProvider>
  )
}

export default Form
