export default async function handler(req, res) {
  // Vérifier la méthode HTTP
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }

  try {
    const { nom, societe, email, telephone, sujet, message } = req.body

    // Validation des champs obligatoires
    if (!nom || !email || !sujet || !message) {
      return res.status(400).json({ 
        message: 'Champs obligatoires manquants',
        required: ['nom', 'email', 'sujet', 'message']
      })
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Format d\'email invalide' })
    }

    // Préparer les données pour l'envoi
    const emailData = {
      to: 'nathalie@blondie.paris',
      subject: `[BLONDIE Contact] ${sujet} - ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #394140; border-bottom: 2px solid #FFB6C1; padding-bottom: 10px;">
            Nouveau message de contact - BLONDIE Paris
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #394140; margin-top: 0;">Informations du contact</h3>
            <p><strong>Nom:</strong> ${nom}</p>
            ${societe ? `<p><strong>Société:</strong> ${societe}</p>` : ''}
            <p><strong>Email:</strong> ${email}</p>
            ${telephone ? `<p><strong>Téléphone:</strong> ${telephone}</p>` : ''}
            <p><strong>Sujet:</strong> ${sujet}</p>
          </div>
          
          <div style="background-color: #fff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">
            <h3 style="color: #394140; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #878787; font-size: 12px;">
            <p>Message envoyé depuis le site web <a href="https://blondie.paris" style="color: #FFB6C1;">blondie.paris</a></p>
            <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
      text: `
        Nouveau message de contact - BLONDIE Paris
        
        Nom: ${nom}
        ${societe ? `Société: ${societe}` : ''}
        Email: ${email}
        ${telephone ? `Téléphone: ${telephone}` : ''}
        Sujet: ${sujet}
        
        Message:
        ${message}
        
        ---
        Message envoyé depuis https://blondie.paris
        Date: ${new Date().toLocaleString('fr-FR')}
      `
    }

    // Envoyer l'email via Nodemailer
    const nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    // Vérifier la configuration SMTP
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('Configuration SMTP manquante, simulation d\'envoi')
      
      // Simuler l'envoi en développement
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      return res.status(200).json({ 
        message: 'Message envoyé avec succès (mode simulation)',
        success: true 
      })
    }

    // Envoyer l'email
    await transporter.sendMail(emailData)

    // Log pour debugging
    console.log('Email envoyé avec succès:', {
      nom,
      email,
      sujet,
      timestamp: new Date().toISOString()
    })

    return res.status(200).json({ 
      message: 'Message envoyé avec succès',
      success: true 
    })

  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
    
    return res.status(500).json({ 
      message: 'Erreur interne du serveur',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}
