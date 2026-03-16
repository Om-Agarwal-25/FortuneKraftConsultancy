import { Resend } from 'resend'
import type { NextRequest } from 'next/server'
import type { ContactFormData, ApiSuccessResponse, ApiErrorResponse } from '@/types'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const body: ContactFormData = await request.json() as ContactFormData
    const { name, email, phone, subject, message } = body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json<ApiErrorResponse>(
        { error: 'Required fields missing' },
        { status: 400 }
      )
    }

    const now = new Date()
    const date = now.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata',
    })

    await resend.emails.send({
      from: 'Fortune Kraft Website <noreply@contact.fortunekraftconsultancy.com>',
      to: process.env.CONTACT_EMAIL ?? '',
      replyTo: email,
      subject: `[Website Query] ${subject} — from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A1628; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #F0A500; margin: 0;">New Query — Fortune Kraft Website</h2>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Submitted:</strong> ${date} IST</p>
            <hr style="border-color: #e5e7eb; margin: 16px 0;" />
            <p><strong>Message:</strong></p>
            <p style="background: #f8f9fa; padding: 16px; border-radius: 8px; border-left: 4px solid #F0A500;">
              ${message}
            </p>
            <hr style="border-color: #e5e7eb; margin: 16px 0;" />
            <p style="color: #6b7280; font-size: 13px;">
              Reply to this email to respond directly to ${name} at ${email}
            </p>
          </div>
        </div>
      `,
    })

    return Response.json<ApiSuccessResponse>({ success: true })

  } catch (error) {
    console.error('Contact API error:', error instanceof Error ? error.message : error)
    return Response.json<ApiErrorResponse>(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
