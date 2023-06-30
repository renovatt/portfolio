import { z } from 'zod';

export const contactSchema = z.object({
    name: z
        .string()
        .max(44, 'O nome é muito grande.')
        .nonempty('Nome é obrigatório.'),

    email: z
        .string()
        .email('Precisa ser um email válido.')
        .nonempty('Email obrigatório.'),

    message: z
        .string()
        .nonempty('Menssagem é obrigatória.')
})