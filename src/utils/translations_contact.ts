import { Language } from './types';

export interface ContactTranslations {
  contact: {
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
  };
  message:{
    noRobot: string;
    unknown: string;
    messageOK: string;
    messageError1: string;
    messageError2: string;
    sending: string;
  };
}

export const contactTranslations: Record<Language, ContactTranslations> = {
  es: {
    contact: {
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      message: "Mensaje",
      submit: "Solicitar información",
    },
    message:{    
      noRobot:'Por favor, verifica que no eres un robot.',
      unknown: 'Desconocido',
      messageOK: 'Formulario enviado con éxito',
      messageError1: "Error al enviar el formulario",
      messageError2: "Error al enviar el formulario, por favor inténtelo de nuevo",
      sending:'Enviando',
    },
  },
  eu: {
    contact: {
      name: "Izena",
      email: "Emaila",
      phone: "Telefonoa",
      message: "Mezua",
      submit: "Informazioa eskatu",
    },
    message:{    
      noRobot:'Egiaztatu ez zarela robot bat.',
      unknown: 'Ezezaguna',
      messageOK: 'Eskaera behar bezala bidali da',
      messageError1: "Akats bat gertatu da eskaera bidaltzean",
      messageError2: "Akats bat gertatu da eskaera bidaltzean, mesedez saiatu berriro",
      sending:'Bidaltzen',
    },
  }
};