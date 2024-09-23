import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configura el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Puedes usar Gmail, pero también puedes configurar cualquier servicio SMTP
      auth: {
        user: process.env.EMAIL_USER,   // Asegúrate de configurar estas variables de entorno
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Envía el correo
      await transporter.sendMail({
        from: email,
        to: 'leizmendi@gmail.com',    // El correo de destino (tu buzón)
        subject: `Nuevo mensaje de ${name}`,
        text: message,
      });

      res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
