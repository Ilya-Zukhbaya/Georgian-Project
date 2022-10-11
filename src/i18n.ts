import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            __progress: 'Progress',
            __saved: 'Saved',
            __info: 'Info',
            __src: 'Source',
          },
          emptyCard: {
            __text: 'randon questions',
            __time: 'time',
            __title: 'title',
          },
          lngs: {
            __buttonEn: 'en',
            __buttonGe: 'ge',
          },
          button: {
            __start: 'start',
            __next: 'next',
          },
          footer: {
            __about: 'about',
            __FAQ: 'FAQ',
            __support: 'support',
            __contact: 'contact',
          },
        },
      },
      ge: {
        translation: {
          header: {
            __progress: 'პროგრესი',
            __saved: 'სანიშნეები',
            __info: 'ინფორმაცია',
            __src: 'წყარო მასალები',
          },
          emptyCard: {
            __text: 'შემთხვევითი კითხვები',
            __time: 'დრო',
            __title: 'სათაური',
          },
          lngs: {
            __buttonEn: 'ინგ',
            __buttonGe: 'ქარ',
          },
          button: {
            __start: 'დაწყება',
            __next: 'შემდეგი',
          },
          footer: {
            __about: 'შესახებ',
            __FAQ: 'კითხვაზე პასუხები',
            __support: 'მხარდაჭერა',
            __contact: 'მხარდაჭერა',
          },
        },
      },
    },
  });

export default i18n;
