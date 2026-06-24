import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulyator-alkogolya-vidmarka';
const title = 'Симулятор Концентрации Алкоголя по Видмарку';
const description = 'Симуляция абсорбции, распределения и выведения алкоголя в организме человека по формуле Видмарка.';

const howTo = [
  {
    name: 'Настройте физический профиль',
    text: 'Введите вес тела, биологический пол и уровень гидратации для расчета фактора Видмарка (r).',
  },
  {
    name: 'Задайте состояние желудка',
    text: 'Выберите пустой желудок, легкий или плотный прием пищи, чтобы задать скорость всасывания.',
  },
  {
    name: 'Добавьте напитки на временную шкалу',
    text: 'Укажите объем, крепость (ABV) и относительное время употребления каждого напитка.',
  },
  {
    name: 'Анализируйте кривую',
    text: 'Посмотрите график изменения концентрации и время протрезвления.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Что такое формула Видмарка?',
    answer: 'Формула Видмарка - это математическая модель для расчета концентрации алкоголя в крови.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Профиль',
    weight: 'Вес (кг)',
    sex: 'Биологический пол',
    male: 'Мужской',
    female: 'Женский',
    hydration: 'Уровень гидратации',
    hydrationLow: 'Низкий',
    hydrationNormal: 'Нормальный',
    hydrationHigh: 'Высокий',
    stomachState: 'Содержимое желудка',
    stomachEmpty: 'Пустой (Быстро)',
    stomachLight: 'Легкая еда (Средне)',
    stomachFull: 'Плотная еда (Медленно)',
    drinksTimeline: 'Шкала употребления',
    addDrink: 'Добавить напиток',
    drinkVolume: 'Объем (мл)',
    drinkAbv: 'Крепость (% об.)',
    drinkTime: 'Время (Час)',
    drinksList: 'Употребленные напитки',
    remove: 'Удалить',
    beer: 'Пиво (330мл, 5%)',
    wine: 'Вино (150ml, 12%)',
    spirits: 'Крепкий алкоголь (40мл, 40%)',
    peakBac: 'Пик BAC',
    timeToSober: 'Время до трезвости',
    sober: 'Трезв',
    currentBac: 'Текущий BAC',
    drivingLimitAlert: 'Разрешение на вождение',
    safeLimit: 'Ниже лимита',
    warningLimit: 'Превышен предел предупреждения',
    dangerLimit: 'Превышен предел опасности',
    graphTitle: 'Концентрация алкоголя в крови за 12 часов',
    timeAxisLabel: 'Время (Часы)',
    bacAxisLabel: 'Промилле (г/л)',
    legalLimitText: 'Стандартный лимит',
    noDrinksText: 'Добавьте напитки для начала симуляции.',
    hours: 'ч.',
    soberStatus: 'Трезв через {time} ч.',
    neverSober: 'Более 12 ч.',
    noteDisclaimer: 'Только для образовательных целей. Не садитесь за руль после употребления.',
    noteWidmark: 'На основе уравнения Видмарка и линейного метаболизма печени.',
  },
  seo: [
    {
      type: 'title',
      text: 'Судебная токсикология и фармакокинетика этанола',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Всасывание, распределение и выведение этанола являются ключевыми концепциями судебной медицины. Большинство алкоголя всасывается в тонком кишечнике. Наличие пищи в желудке замедляет гастрический транзит, что сглаживает кривую концентрации алкоголя в крови.',
    },
    {
      type: 'paragraph',
      html: 'Модель использует классическую формулу: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Выведение печенью следует кинетике нулевого порядка с постоянной скоростью линейного убывания около 0.15 г/л в час.',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'ForensicApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
