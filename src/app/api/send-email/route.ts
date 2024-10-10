import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Exportar la función para manejar las solicitudes POST
export async function POST(req: NextRequest) {
  const { name, email, phone, message, recaptchaToken } = await req.json();

  // Validar reCAPTCHA en el backend
  const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });

  if (!recaptchaResponse.ok) {
    return NextResponse.json({ message: 'Error verificando reCAPTCHA' }, { status: 500 });
  }

  const recaptchaData = await recaptchaResponse.json();
  if (!recaptchaData.success) {
    return NextResponse.json({ message: 'reCAPTCHA failed' }, { status: 400 });
  }

  // Configuración de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // O cualquier otro proveedor de SMTP
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Configurar el contenido del correo
  const mailOptions = {
    from: email,
    to: process.env.RECEIVING_EMAIL, // El buzón donde quieres recibir los correos
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json({ message: 'Error al enviar email' }, { status: 500 });
  }
}

// Puedes agregar más métodos aquí si es necesario, como PATCH, PUT, DELETE, etc.
