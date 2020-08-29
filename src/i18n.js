import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          'Local Time': 'Local Time',
        },
      },
      pt: {
        translations: {
          'Local Time': 'Hora Local',
        },
      },
      fr: {
        translations: {
          'Local Time': 'Heure Locale',
        },
      },
      es: {
        translations: {
          'Local Time': 'Hora Local',
        },
      },
      de: {
        translations: {
          'Local Time': 'Ortszeit',
        },
      },
      nl: {
        translations: {
          'Local Time': 'Lokale Tijd',
        },
      },
      it: {
        translations: {
          'Local Time': 'Ora Locale',
        },
      },
    },
    fallbackLng: 'en',
    debug: false,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  });

export default i18n;
