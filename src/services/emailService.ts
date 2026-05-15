import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_7hba43c';
const EMAILJS_TEMPLATE_ID = 'template_rtx74ip';
const EMAILJS_PUBLIC_KEY = '4hew6XyGRZcykw9AP';

// Vérifier si les clés sont configurées
const isConfigured = () => {
  return EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID;
};

// Initialiser EmailJS seulement si configuré
if (isConfigured()) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; error?: string }> => {
  // Vérifier si EmailJS est configuré
  if (!isConfigured()) {
    return {
      success: false,
      error: 'EmailJS n\'est pas encore configuré. Utilisez le guide de configuration pour activer l\'envoi d\'emails.'
    };
  }

  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Non fourni',
      message: data.message,
      to_name: 'Frangin GBESSEMEHLAN',
      reply_to: data.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      return {
        success: false,
        error: `Erreur EmailJS: ${response.text || 'Statut ' + response.status}`
      };
    }
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    // Messages d'erreur plus spécifiques
    if (error.text) {
      return {
        success: false,
        error: `Erreur EmailJS: ${error.text}`
      };
    } else if (error.message) {
      return {
        success: false,
        error: `Erreur: ${error.message}`
      };
    } else {
      return {
        success: false,
        error: 'Erreur inconnue lors de l\'envoi. Vérifiez votre configuration EmailJS.'
      };
    }
  }
};

export const isEmailJSConfigured = isConfigured;