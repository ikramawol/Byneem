import { Resend } from 'resend'
import { z } from 'zod'

function getResendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim()
  if (!key) return null
  return new Resend(key)
}

/** Where inbound contact notifications are sent (your inbox). */
function getContactNotifyEmail(): string {
  return (
    process.env.CONTACT_NOTIFY_EMAIL?.trim() || 'hello@byneem.com'
  )
}

/** Must match a sender Resend allows (verified domain, or onboarding@resend.dev in test). */
function getResendFromAddress(): string {
  return process.env.RESEND_FROM_EMAIL?.trim() || 'onboarding@resend.dev'
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const publicEmailFailureMessage =
  "We couldn't send your message from this form. Please try again later or email hello@byneem.com directly."

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validatedData = contactSchema.parse(body)

    const resend = getResendClient()
    if (!resend) {
      console.error(
        '[contact] RESEND_API_KEY is not set. Add it to .env.local and restart next dev.'
      )
      return Response.json({ error: publicEmailFailureMessage }, { status: 503 })
    }

    const { error, data } = await resend.emails.send({
      from: getResendFromAddress(),
      to: getContactNotifyEmail(),
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: validatedData.email,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      const msg = error.message || ''
      const lower = msg.toLowerCase()
      const invalidKey =
        error.name === 'validation_error' && lower.includes('api key')
      const sandboxRecipient =
        lower.includes('only send testing') || lower.includes('verify a domain')
      if (invalidKey) {
        console.error(
          '[contact] API key rejected by Resend. Create a key at https://resend.com/api-keys, set RESEND_API_KEY in .env.local (no spaces/quotes issues), restart next dev.'
        )
      }
      if (sandboxRecipient) {
        console.error(
          '[contact] Resend test mode: set CONTACT_NOTIFY_EMAIL in .env.local to your Resend account email (the address mentioned in the error above). For production, verify your domain at https://resend.com/domains then set RESEND_FROM_EMAIL (e.g. noreply@yourdomain.com) and CONTACT_NOTIFY_EMAIL=hello@byneem.com.'
        )
      }
      return Response.json(
        { error: publicEmailFailureMessage },
        { status: invalidKey ? 502 : 500 }
      )
    }

    console.log('[v0] Email sent successfully:', data)

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error sending email:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
