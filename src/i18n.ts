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
          progress: {
            __total: 'Total Progress',
            __history: 'History',
            __law: 'Law',
            __languages: 'Language',
            __questions: 'questions',
            __totalLeft: 'Total questions left',
          },
          saved: {
            __total: 'Saved questions',
            __history: 'History',
            __law: 'Law',
            __languages: 'Language',
            __clear: 'Clear saved questions',
          },
          info: {
            __total: 'Information',
            __subtitle: 'Here you can find all information about',
            __subtitle1: 'how to use the service and navigate it',
            __click: 'Click on',
            __1li: 'to return to main page',
            __progress: 'Progress',
            __saved: 'Saved',
            __or: 'or',
            __2li:
              'shows how many questions you answered correctly, you can also see number ofquestions you completed by choosen topic',
            __3li:
              'shows your saved questions, you can also see the total number of saved questions by choosen topic',
            __4li: 'to change your theme',
            __5li: 'to change language to Georigian',
          },
          source: {
            __h1: 'Here you can download all materials for your self-study',
            __sub1: 'Just choose',
            __topic: 'Topic',
            __and: 'and',
            __click: 'Click the download button',
            __sub2: 'to install all questions from this topic',
            __history: 'History',
            __law: 'Law',
            __languages: 'Language',
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
          progress: {
            __total: 'მთლიანი პროგრესი',
            __history: 'ისტორია',
            __law: 'Კანონი',
            __languages: 'Ენა',
            __questions: 'კითხვები',
            __totalLeft: 'სულ დარჩა კითხვები',
          },
          saved: {
            __total: 'შენახული კითხვების გასუფთავება',
            __history: 'ისტორია',
            __law: 'Კანონი',
            __languages: 'Ენა',
            __clear: 'შენახული კითხვების გასუფთავება',
          },
          info: {
            __total: 'Information',
            __subtitle: 'აქ შეგიძლიათ იპოვოთ ყველა ინფორმაცია და ',
            __subtitle1: 'როგორ გამოვიყენოთ სერვისი და ნავიგაცია',
            __click: 'Დააკლიკეთ',
            __1li: 'მთავარ გვერდზე დასაბრუნებლად',
            __progress: 'პროგრესი',
            __saved: 'სანიშნეები',
            __or: 'ან',
            __2li:
              'გვიჩვენებს რამდენ კითხვას უპასუხეთ სწორად, ასევე შეგიძლიათ ნახოთ თქვენს მიერ შესრულებული კითხვების რაოდენობა არჩეული თემის მიხედვით',
            __3li:
              'აჩვენებს თქვენს შენახულ კითხვებს, ასევე შეგიძლიათ ნახოთ შენახული კითხვების საერთო რაოდენობა არჩეული თემის მიხედვით',
            __4li: 'თქვენი თემის შესაცვლელად',
            __5li: 'ენის ქართულად შეცვლა',
          },
          source: {
            __h1: 'აქ შეგიძლიათ ჩამოტვირთოთ ყველა მასალა თქვენი თვითშესწავლისთვის',
            __sub1: 'უბრალოდ აირჩიე',
            __topic: 'Თემა',
            __and: 'და',
            __click: 'დააჭირეთ ჩამოტვირთვის ღილაკს',
            __sub2: 'დააინსტალიროთ ყველა კითხვა ამ თემიდან',
            __history: 'ისტორია',
            __law: 'Კანონი',
            __languages: 'Ენა',
          },
        },
      },
    },
  });

export default i18n;
