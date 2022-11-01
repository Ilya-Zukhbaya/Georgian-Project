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
            __text: 'random questions',
            __time: 'time',
            __title: 'title',
            __from: 'from',
          },
          result: {
            __result: 'Result',
            __correct: 'correct answers from',
            __questions: 'questions',
          },
          lngs: {
            __buttonEn: 'en',
            __buttonGe: 'ge',
            __buttonRu: 'ru',
          },
          button: {
            __start: 'start',
            __next: 'next',
            __try: 'Try again',
            __tomain: 'To main page',
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
            __from: 'from',
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
            __h1: 'You have not selected any questions',
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
            __5li: 'to change language',
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
          about: {
            __title: 'About Project',
            __li1: 'This project was created in order',
            __li1o1: 'to help people with training with pre-exam questions',
            __li1o2: 'for obtaining citizenship of Georgia',
            __li2: 'If this project',
            __li2o1: 'helped you with passing exams',
            __li2o2: 'then the project really needed its implementation',
            __li3: 'I wish you success in your practice',
            __li3o1: 'of test tasks and I hope that my project helped you with this',
          },
          support: {
            __title: 'Support',
            __subtitle:
              'If your want to help author and support project you can support by transferring to one of these cards for the amount you want, ',
            __subtitle1: 'any support will be valuable',
          },
          faq: {
            __title: 'FAQ',
            __li1: 'Do I need to pay to use the service?',
            __li1o1: 'No, the service is completely free',
            __li2: 'Where can I text a message to the author?',
            __li2o1:
              'If you have any troubles or question, you can text me in Telegram, Email or Instagram',
            __li3: 'Is my progress saved?',
            __li3o1:
              'Yes, your theme, language, progress and highlight questions settings are saved on your device',
            __li4: 'Will anything new be added to the service?',
            __li4o1:
              'Yes, new features will be added in the future, including the creation of a personal account',
            __li5: 'How can i support the project?',
            __li5o1:
              'You can go to the support section and find additional information or write to me personally',
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
            __from: '',
          },
          result: {
            __result: 'შედეგი',
            __correct: 'სწორი პასუხები',
            __questions: 'კითხვებიდან',
          },
          lngs: {
            __buttonEn: 'ინგ',
            __buttonGe: 'ქარ',
            __buttonRu: 'რუ',
          },
          button: {
            __start: 'დაწყება',
            __next: 'შემდეგი',
            __try: 'Კიდევ სცადე',
            __tomain: 'მთავარ გვერდზე',
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
            __languages: 'ენა',
            __questions: 'კითხვებიდან',
            __from: '',
            __totalLeft: 'სულ დარჩა კითხვები',
          },
          saved: {
            __total: 'შენახული კითხვების გასუფთავება',
            __history: 'ისტორია',
            __law: 'Კანონი',
            __languages: 'ენა',
            __clear: 'შენახული კითხვების გასუფთავება',
            __h1: 'თქვენ არ შეგირჩევიათ კითხვები',
          },
          info: {
            __total: 'ინფორმაცია',
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
            __5li: 'ენის შესაცვლელად',
          },
          source: {
            __h1: 'აქ შეგიძლიათ ჩამოტვირთოთ ყველა მასალა თქვენი თვითშესწავლისთვის',
            __sub1: 'უბრალოდ აირჩიე',
            __topic: 'თემა',
            __and: 'და',
            __click: 'დააჭირეთ ჩამოტვირთვის ღილაკს',
            __sub2: 'დააინსტალიროთ ყველა კითხვა ამ თემიდან',
            __history: 'ისტორია',
            __law: 'Კანონი',
            __languages: 'ენა',
          },
          about: {
            __title: 'პროექტის შესახებ',
            __li1: 'ეს პროექტი წესრიგში შეიქმნა',
            __li1o1: 'დაეხმაროს ადამიანებს ტრენინგში წინასაგამოცდო კითხვებით',
            __li1o2: 'საქართველოს მოქალაქეობის მისაღებად',
            __li2: 'თუ ეს პროექტი',
            __li2o1: 'დაგეხმარა გამოცდების ჩაბარებაში',
            __li2o2: 'მაშინ პროექტს ნამდვილად სჭირდებოდა მისი განხორციელება',
            __li3: 'წარმატებებს გისურვებ პრაქტიკაში',
            __li3o1:
              'სატესტო დავალებების შესახებ და იმედი მაქვს, რომ ჩემი პროექტი დაგეხმარათ ამაში',
          },
          support: {
            __title: 'მხარდაჭერა',
            __subtitle:
              'თუ გსურთ დაეხმაროთ ავტორს და პროექტს, შეგიძლიათ მხარი დაუჭიროთ ერთ-ერთ ამ ბარათზე გადარიცხვით თქვენთვის სასურველ თანხაზე, ',
            __subtitle1: 'ნებისმიერი მხარდაჭერა ღირებული იქნება',
          },
          faq: {
            __title: 'პასუხები კითხვებზე',
            __li1: 'პასუხები კითხვებზე?',
            __li1o1: 'არა, მომსახურება სრულიად უფასოა',
            __li2: 'სად შემიძლია ტექსტური შეტყობინება ავტორს?',
            __li2o1:
              'თუ თქვენ გაქვთ რაიმე პრობლემა ან შეკითხვა, შეგიძლიათ მომწეროთ Telegram, Email ან Instagram',
            __li3: 'არის ჩემი პროგრესი შენახული?',
            __li3o1:
              'დიახ, თქვენი თემის, ენის, პროგრესისა და ხაზგასმული კითხვების პარამეტრები შენახულია თქვენს მოწყობილობაში',
            __li4: 'რამე ახალი დაემატება სერვისს?',
            __li4o1: 'დიახ, მომავალში დაემატება ახალი ფუნქციები, მათ შორის პირადი ანგარიშის შექმნა',
            __li5: 'როგორ შემიძლია მხარი დავუჭირო პროექტს?',
            __li5o1:
              'შეგიძლიათ გადახვიდეთ მხარდაჭერის განყოფილებაში და იპოვოთ დამატებითი ინფორმაცია ან მომწეროთ პირადად',
          },
        },
      },
      ru: {
        translation: {
          header: {
            __progress: 'Прогресс',
            __saved: 'Избранное',
            __info: 'Информация',
            __src: 'Источники',
          },
          emptyCard: {
            __text: 'случайных вопросов',
            __time: 'время',
            __title: 'Заголовок',
            __from: 'по',
          },
          result: {
            __result: 'Результат',
            __correct: 'правильных ответов из',
            __questions: 'вопросов',
          },
          lngs: {
            __buttonEn: 'ан',
            __buttonGe: 'гр',
            __buttonRu: 'ру',
          },
          button: {
            __start: 'старт',
            __next: 'след.',
            __try: 'Поробовать еще раз',
            __tomain: 'На главную',
          },
          footer: {
            __about: 'О проекте',
            __FAQ: 'FAQ',
            __support: 'Поддержка',
            __contact: 'Контакты',
          },
          progress: {
            __total: 'Общий прогресс',
            __history: 'История',
            __law: 'Закон',
            __from: 'из',
            __languages: 'Грузинский язык',
            __questions: 'вопросов',
            __totalLeft: 'Всего осталось вопросов',
          },
          saved: {
            __total: 'Сохраненные вопросы',
            __history: 'История',
            __law: 'Закон',
            __languages: 'Грузинский язык',
            __clear: 'очистить сохраненные вопросы',
            __h1: 'Вы еще не сохраняли ничего в избранное',
          },
          info: {
            __total: 'Информация',
            __subtitle: 'Здесь вы можете найти всю информацию о том',
            __subtitle1: 'как пользоваться сервисом и ориентироваться в нем',
            __click: 'Нажмите на',
            __1li: 'чтобы вернуться на главную страницу',
            __progress: 'Прогресс',
            __saved: 'Избранное',
            __or: 'или',
            __2li: 'показывает, на сколько вопросов вы ответили правильно по выбранной теме',
            __3li:
              'показывает ваши сохраненные вопросы, вы также можете увидеть общее количество сохраненных вопросов по выбранной теме',
            __4li: 'для смены темы',
            __5li: 'для смены языка',
          },
          source: {
            __h1: 'Здесь вы можете скачать все материалы для самостоятельного изучения',
            __sub1: 'Просто выберите',
            __topic: 'Тему',
            __and: 'и',
            __click: 'Нажмите кнопку загрузки',
            __sub2: 'для установки всех вопросов из этой темы',
            __history: 'История',
            __law: 'Закон',
            __languages: 'Грузинский язык',
          },
          about: {
            __title: 'О проекте',
            __li1: 'Этот проект создан для того, чтобы',
            __li1o1: 'помочь людям с подготовкой перед экзаменом',
            __li1o2: 'для получения гражданства Грузии',
            __li2: 'Если этот проект',
            __li2o1: 'помог вам сдать экзамены',
            __li2o2: 'то проект нуждался в своей реализации',
            __li3: 'Желаю вам успехов в вашей практике',
            __li3o1: 'тестовых заданий и надеюсь, что мой проект помог вам в этом',
          },
          support: {
            __title: 'Помощь',
            __subtitle:
              'Если вы хотите помочь автору и поддержать проект, вы можете поддержать его, переведя на одну из этих карт желаемую сумму, ',
            __subtitle1: 'любая поддержка будет ценна',
          },
          faq: {
            __title: 'FAQ',
            __li1: 'Нужно ли платить за использование сервиса?',
            __li1o1: 'Нет, сервис полностью бесплатный',
            __li2: 'Где написать сообщение автору?',
            __li2o1:
              'Если у вас есть какие-либо проблемы или вопросы, вы можете написать мне в Telegram, Email или Instagram',
            __li3: 'Мой прогресс сохраняется?',
            __li3o1:
              'Да, настройки вашей темы, языка, прогресса и избранные вопросы сохраняются на вашем устройстве.',
            __li4: 'Будет ли добавлено что-то новое в сервис?',
            __li4o1:
              'Да, в будущем будут добавлены новые функции, включая создание личного кабинета',
            __li5: 'Как я могу поддержать проект?',
            __li5o1:
              'Вы можете перейти в раздел поддержки и найти дополнительную информацию или написать мне лично',
          },
        },
      },
    },
  });

export default i18n;
