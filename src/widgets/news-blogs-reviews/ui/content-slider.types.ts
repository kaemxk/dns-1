export interface SliderContent {
  message: string
  data: {
    items: Item[]
  }
}

export interface Item {
  id: string
  title: string
  url: string
  imageUrl: string
  videoUrl: string | null
  date: number
  content: string
  type: string
  groupName: string
  style: string | null
  vobler: Vobler[]
  parent: Parent
}

export interface Vobler {
  title: string
  color: string
}

export interface Parent {
  url: string
  name: string
}

//   {
//     "message": "",
//     "data": {
//       "items": [
//         {
//           "id": "5a61da8d-7c70-11ef-9275-0050569d21a3",
//           "title": "Старт продаж! Смартфон Infinix ZERO 40 5G",
//           "url": "https://www.dns-shop.ru/news/5a61da8d-7c70-11ef-9275-0050569d21a3/",
//           "imageUrl": "https://c.dns-shop.ru/thumb/st1/fit/300/300/349eae51fcf43bb6e5d00ab8c89b2e18/5d04ee29ae44a3baa2efd9aaf05f3cc9f4d3eee605ff7ac8722961d7b14ea78b.jpg.webp",
//           "videoUrl": null,
//           "date": 1727395200,
//           "content": "Команда DNS объявляет старт продаж смартфона Infinix ZERO 40 5G\n\nРасширенные возможности по стабилизации видео\nОсновная 108-мегапиксельная камера Infinix ZERO 40 получила качественную оптическую стабилизацию изображения, фазовый автофокус и возможность",
//           "type": "news",
//           "groupName": "Новости",
//           "style": null,
//           "vobler": [
//             {
//               "title": "Новинки",
//               "color": "#94ac3c"
//             }
//           ],
//           "parent": {
//             "url": "/news/",
//             "name": "Все новости"
//           }
