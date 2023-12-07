import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .max(44, 'O nome é muito grande.')
    .min(5, 'Nome é obrigatório.'),

  email: z
    .string()
    .email('Precisa ser um email válido.')
    .min(1, 'Email obrigatório.'),

  message: z.string().min(1, 'Menssagem é obrigatória.'),
})
