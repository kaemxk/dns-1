interface Anchor {
  url: string
  text: string
}

export interface Offer {
  url: string
  image: string
  text: string
  anchors: Anchor[]
}

// Массив с предложениями, вставьте url для того чтобы ссылка работала, обратите внимания на названия после url! :)
export const offers: Offer[] = [
  {
    url: '#',
    image: '../pages/main-page/components/actual-offers/images/tv.png',
    text: 'Смотреть кино',
    anchors: [
      { url: '#', text: 'Телевизоры' },
      { url: '#', text: 'Кранштейны для телевизоров' },
      { url: '#', text: 'Тумбы и стойки для ТВ' },
      { url: '#', text: 'Приставка для цифрового ТВ' },
    ],
  },
  {
    url: '#',
    image: '../pages/main-page/components/actual-offers/images/iron.jpg',
    text: 'Отдых на природе',
    anchors: [
      { url: '#', text: 'SUP-доски' },
      { url: '#', text: 'Изометрические сумки' },
      { url: '#', text: 'Аксессуары для SUP-досок' },
      { url: '#', text: 'Квадрокоптеры и дроны' },
      { url: '#', text: 'Настольные игры' },
    ],
  },
  {
    url: '#',
    image: '../pages/main-page/components/actual-offers/images/coffeemachine.jpg',
    text: 'Согревающие напитки',
    anchors: [
      { url: '#', text: 'Кофемашины автоматические' },
      { url: '#', text: 'Кофемашины капсульные' },
      { url: '#', text: 'Электрочайники' },
      { url: '#', text: 'Турки' },
      { url: '#', text: 'Чайники для плит' },
    ],
  },
  {
    url: '#',
    image: '../pages/main-page/components/actual-offers/images/heater.jpg',
    text: 'Тепло в доме',
    anchors: [
      { url: '#', text: 'Конвекторы' },
      { url: '#', text: 'Электрокамины' },
      { url: '#', text: 'Масляные обогреватели' },
      { url: '#', text: 'Электрические инфракрасные обогреватели' },
    ],
  },
]
