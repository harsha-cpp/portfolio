import { NextRequest, NextResponse } from 'next/server'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

// Remove dynamic export that's incompatible with static export
// export const dynamic = 'force-dynamic'

// Initialize SES client (only when credentials are available)
function createSESClient() {
  return new SESClient({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  })
}

// Input validation and sanitization
function validateAndSanitizeInput(message: string, email?: string, name?: string) {
  // Basic validation
  if (!message || typeof message !== 'string') {
    throw new Error('Message is required')
  }

  if (message.length > 500) {
    throw new Error('Message must be 500 characters or less')
  }

  if (message.trim().length === 0) {
    throw new Error('Message cannot be empty')
  }

  // Email validation (optional)
  if (email && email.length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format')
    }
  }

  // Name validation (optional)
  if (name && name.length > 100) {
    throw new Error('Name must be 100 characters or less')
  }

  // Basic sanitization - remove HTML tags and trim
  const sanitizedMessage = message.replace(/<[^>]*>/g, '').trim()
  const sanitizedEmail = email?.replace(/<[^>]*>/g, '').trim() || ''
  const sanitizedName = name?.replace(/<[^>]*>/g, '').trim() || ''

  return {
    message: sanitizedMessage,
    email: sanitizedEmail,
    name: sanitizedName
  }
}

// Get client info for tracking
function getClientInfo(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || 'Unknown'
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'Unknown'
  
  return { userAgent, ip }
}

export async function POST(request: NextRequest) {
  try {
    // COMMENTED OUT FOR TESTING - AWS SES BACKEND LOGIC
    // Uncomment when AWS SES is fully setup
    /*
    // Check if AWS credentials are configured
    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service not configured. Please contact me directly via email.' 
        },
        { status: 503 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { message, email, name } = body

    // Validate and sanitize inputs
    const sanitized = validateAndSanitizeInput(message, email, name)
    const clientInfo = getClientInfo(request)

    // Prepare email content
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    })

    const emailSubject = 'New Portfolio Message'
    const emailBody = `
New message from your portfolio website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE:
${sanitized.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SENDER DETAILS:
${sanitized.name ? `Name: ${sanitized.name}` : 'Name: Not provided'}
${sanitized.email ? `Email: ${sanitized.email}` : 'Email: Not provided'}

TECHNICAL INFO:
IP Address: ${clientInfo.ip}
User Agent: ${clientInfo.userAgent}
Timestamp: ${timestamp}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from your portfolio contact form.
${sanitized.email ? `Reply directly to: ${sanitized.email}` : ''}
    `.trim()

    // Prepare SES email parameters
    const emailParams = {
      Source: process.env.AWS_SES_FROM_EMAIL!,
      Destination: {
        ToAddresses: [process.env.AWS_SES_TO_EMAIL!],
      },
      Message: {
        Subject: {
          Data: emailSubject,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: emailBody,
            Charset: 'UTF-8',
          },
        },
      },
      ...(sanitized.email && {
        ReplyToAddresses: [sanitized.email],
      }),
    }

    // Send email via SES
    const sesClient = createSESClient()
    const command = new SendEmailCommand(emailParams)
    const result = await sesClient.send(command)

    console.log('Email sent successfully:', result.MessageId)

    return NextResponse.json(
      { 
        success: true, 
        messageId: result.MessageId,
        message: 'Message sent successfully!' 
      },
      { status: 200 }
    )
    */

    // TEMPORARY MOCK RESPONSE FOR TESTING
    // Parse request body for logging
    const body = await request.json()
    const { message, email, name } = body
    
    console.log('TEST MODE - Message received:', { message, email, name })
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Return mock success response
    return NextResponse.json(
      { 
        success: true, 
        messageId: 'test-message-' + Date.now(),
        message: 'Message sent successfully! (Test Mode)' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)

    // Return appropriate error message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage.includes('AWS') || errorMessage.includes('SES') 
          ? 'Message not sent, please try again later'
          : errorMessage
      },
      { status: 400 }
    )
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
