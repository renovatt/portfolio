import { NextResponse } from 'next/server'
import { ContactDto, contactSchema } from 'schemas/contact-schema'

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL ?? ''

export async function POST(request: Request) {
  try {
    const body: ContactDto = await request.json()

    const { name, email, message } = contactSchema.parse(body)

    const messageData = {
      content: '@everyone',
      embeds: [
        {
          description: 'Você tem uma nova mensagem!',
          color: 16318541,
          fields: [
            {
              name: 'Nome',
              value: name,
              inline: true,
            },
            {
              name: 'E-mail:',
              value: email,
              inline: true,
            },
            {
              name: 'Mensagem',
              value: message,
            },
          ],
          author: {
            name: 'Visitante',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6e2GibzGWjfr21rRt-LFaZq8ayZgcYpxmw&usqp=CAU',
            icon_url:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6e2GibzGWjfr21rRt-LFaZq8ayZgcYpxmw&usqp=CAU',
          },
          footer: {
            text: 'Enviado pelo portfolio',
            icon_url:
              'https://raw.githubusercontent.com/renovatt/portfolio/main/public/icon-512x512.png',
          },
          thumbnail: {
            url: 'https://raw.githubusercontent.com/renovatt/portfolio/main/public/icon-512x512.png',
          },
        },
      ],
      attachments: [],
    }

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    })

    return NextResponse.json({
      message: 'Sua mensagem foi enviada!',
    })
  } catch (error) {
    return NextResponse.error()
  }
}
