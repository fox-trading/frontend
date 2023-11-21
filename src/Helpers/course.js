import CryptoBoost from "../Imgs/CryptoBoost.png";
// import TradeUpgrade from "../Imgs/TradeUpgrade.png";
import PointCard from "../Imgs/PointCard.png";
import PaperCard from "../Imgs/PaperCard.png";
import ChatCard from "../Imgs/ChatCard.png";

export const COURSES_LIST = [
  {
    name: "CryptoBoost",
    id: 'crypto-boost',
    description:
      "Курс для начинающих трейдеров, желающих научиться системной торговле, получить фундаментальные знания о структуре и законах рынка криптовалют.",
    image: CryptoBoost,

    subDescription:
      "Это отправная точка в изучении крипто трейдинга. Профильное образование не требуется. Сложные экономические термины будут раскрыты максимально подробно и доступно на более простых примерах.",
    difficult: "от 0 до 1 года опыта торговли",

    learningList: [
      'Изучите платформы для торговли и аналитики рынка криптовалют',
      'Научитесь контролировать риски',
      'Изучите логику выбора активов для торговли',
      'Научитесь подбирать оптимальное время для торговли на рынке',
      'Овладеете основами свинг и интрадей трейдинга, логикой открытия и закрытия позиций',
      'Узнаете дополнительные способы заработка в сфере крипты',
    ],

    listAbout: [
      {
        title: "Более 20 часов обучающих материалов",
        text: "Курс представлен в записи. Вам будет предоставлен доступ в личный кабинет для просмотра видео уроков.",
        img: PointCard,
      },

      {
        title: "Практические занятие после каждого урока.",
        text: "По факту просмотра любого из уроков необходимо выполнить домашнее задание с постоянной поддержкой кураторов команды FoxTraders. Обратная связь от кураторов поможет разобраться во всех темах дополнительно и при необходимости более углубленно.",
        img: PaperCard,
      },

      {
        title: "Предоставляется доступ в чат потока.",
        text: "В рамках чата вы будете постоянно на связи с другими учащимися и с кураторами проекта. Комьюнити поможет быстрее развиться в сфере трейдинга. В чате постоянно публикуются дополнительные материалы, связанные с образованием.",
        img: ChatCard,
      },
    ],

    lessons: [
      {
        name: 'Урок 1. Базовые понятия',
        list: [
          'Что такое трейдинг?',
          'Виды трейдинга',
          'Виды финансовых рынков',
          'Биржа и терминалы для торговли',
          'Правила разумного инвестирования',
          'Как выбирать активы для торговли',
        ]
      },
      {
        name: 'Урок 2. Базовые инструменты аналитики',
        list: [
          'Фазы рынка',
          'Скользящие средние',
          'Индикатор относительной силы',
          'Профиль рынка (Market Profile)',
        ]
      },
      {
        name: 'Урок 3. Рыночная механика',
        list: [
          'Виды ордеров и принципы их сведения',
          'Ценовые уровни и логика формирования',
          'Дельта в сочетании с уровнями',
        ]
      },
      {
        name: 'Урок 4. Причины разворота рыночных котировок',
        list: [
          'Разворотные свечные модели',
          'Открытый интерес и как торговать с его помощью',
          'Объем торгов и его влияние на котировки',
          'Сетка Фибоначчи и мифы связанные с ней',
        ]
      },
      {
        name: 'Урок 5. Управление рисками и как получать прибыль часто ошибаясь',
        list: [
          'Как определить допустимый убыток',
          'Что такое кредитное плечо в трейдинге',
          'Важность статистики',
        ]
      },
      {
        name: 'Урок 6. Построение торговой системы, основные принципы',
        list: [
          'Индикатор VWAP',
          'Что такое распределение Гаусса',
          'Когда открывать позицию',
          'Когда фиксировать прибыль и убыток',
        ]
      },
    ]
  },
  // {
  //   name: "TradeUpgrade",
  //   id: 'trade-upgrade',
  //   description:
  //     "Курс нацелен на уже имеющих опыт трейдеров, задача которого сформировать четкую и понятную торговую систему для любой фазы рынка.",
  //   subDescription:
  //     'Ответить на вопросы, которые накопились за время нахождения в рынке. Главным образом, данный курс позволит научиться грамотно управлять депозитом.',
  //   image: TradeUpgrade,
  //   difficult: "от 1 до 3 года опыта торговли",
  //   learningList: [
  //     'Подробно изучите инструменты кластерного и объемного анализа',
  //     'Научитесь совмещать кластерный/объемный анализ с инструментами технического анализа',
  //     'Получите готовую торговую стратегию, а также все необходимые инструменты для составления своей собственной',
  //     'Детально изучите риск-менеджмент и научитесь управлять своим депозитом в зависимости от стиля торговли',
  //     'Получите набор внутри-командных индикаторов',
  //     ''
  //   ],
  //   listAbout: [
  //     {
  //       title: "Более 40 часов лекций.",
  //       text: "3-недельный онлайн интенсив с более глубоким разбором инструментов технического анализа в сочетании с кластерным и объемным анализом.",
  //       img: PointCard,
  //     },
  //
  //     {
  //       title: "Отработка каждой темы на практических занятиях с кураторами.",
  //       text: "По окончанию курса лекций участники будут разделены на подгруппы. Под контролем кураторов будут проработаны все инструменты технического и кластерного анализа.",
  //       img: PaperCard,
  //     },
  //
  //     {
  //       title: "Доступ в сообщество действующих трейдеров.",
  //       text: "После успешной сдачи и отработки практических заданий, наработки положительной торговой статистики будет возможность вступить в команду дэйтрейдеров и получать заработную плату.",
  //       img: ChatCard,
  //     },
  //   ],
  //   lessons: [
  //     {
  //       name: 'Урок 1. Технический анализ',
  //       list: [
  //         'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями',
  //         'Свечи и свечные модели',
  //         'Кластерный анализ в сочетании со свечным',
  //         'Кластерные аномалии'
  //       ]
  //     },
  //     {
  //       name: 'Урок 2. Объемы, дельта и кумулятивная дельта',
  //       list: [
  //        'Принципы работы дельты и кумулятивной дельты',
  //        'Разворотные паттерны кумулятивной дельты, кумулятивная дельта в боковике',
  //        'Сочетание инструментов технического анализа с кумулятивной дельтой и анализом объемов покупок и продаж',
  //        'Профиль бокового объёма',
  //        'Индекс относительной силы'
  //       ]
  //     },
  //     {
  //       name: 'Урок 3. Торговля по тренду',
  //       list: [
  //         'Разворотные паттерны и паттерны, продолжающие тренд',
  //         'Сетка Фибоначчи и логика работы с ней',
  //         'Скользящие средние',
  //         'Трендовый индикатор FoxTraders'
  //       ]
  //     },
  //     {
  //       name: 'Урок 4. Техника торговли на медвежьем рынке',
  //       list: [
  //         'Правила использования вышеуказанных инструментов тех. анализа на падающем рынке',
  //         'Интерпретация дельты и кумулятивной дельты',
  //         'Как определить смену тренда и вовремя перестроиться'
  //       ]
  //     },
  //     {
  //       name: 'Урок 5. Риск менеджмент',
  //       list: [
  //         'Правила управления торговым депозитом ',
  //         'Как определить допустимую сумму на сделку',
  //         'Пирамидинг или как увеличить прибыль в сделке ',
  //         'Как открывать позицию в зависимости от рыночной ситуации',
  //         'Виды стоплосса'
  //       ]
  //     },
  //     {
  //       name: 'Урок 6. Психология трейдинга (Урок ведет психолог)',
  //       list: [
  //        'Ошибки трейдера',
  //        'Как справляться с потерями',
  //        'Как контролировать риски в момент успеха',
  //        'Как работать с FOMO'
  //       ]
  //     },
  //     {
  //       name: 'Урок 7. Подведение итогов',
  //       list: [
  //         'Разбор выполненных домашних заданий',
  //         'Формирование групп для практических занятий с кураторами',
  //         'Знакомство с тестером стратегий',
  //         'Условия перехода в команду, нюансы работы в ней'
  //       ]
  //     },
  //   ],
  // },
];