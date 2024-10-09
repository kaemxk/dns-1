/* eslint-disable @typescript-eslint/no-unsafe-call */
// @ts-nocheck

import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'

import { useGetSliderContentQuery } from '@/shared/redux/api/baseApi'

import { ContentSlider } from './сontent-slider'

vi.mock('@/shared/redux/api/baseApi', () => ({
  useGetSliderContentQuery: vi.fn(),
}))

const mockData = {
  message: '',
  data: {
    items: [
      {
        id: '5a61da8d-7c70-11ef-9275-0050569d21a3',
        title: 'Старт продаж! Смартфон Infinix ZERO 40 5G',
        url: 'https://www.dns-shop.ru/news/5a61da8d-7c70-11ef-9275-0050569d21a3/',
        imageUrl:
          'https://c.dns-shop.ru/thumb/st1/fit/300/300/349eae51fcf43bb6e5d00ab8c89b2e18/5d04ee29ae44a3baa2efd9aaf05f3cc9f4d3eee605ff7ac8722961d7b14ea78b.jpg.webp',
        videoUrl: null,
        date: 1727395200,
        content: '',
        type: 'news',
        groupName: 'Новости',
        style: null,
        vobler: [
          {
            title: 'Новинки',
            color: '#94ac3c',
          },
        ],
        parent: {
          url: '/news/',
          name: 'Все новости',
        },
      },
      {
        id: null,
        title: 'В чем разница между обычной PS5 и PS5 Pro?',
        url: 'https://club.dns-shop.ru/blog/t-65-igrovyie-konsoli/126921-v-chem-raznitsa-mejdu-obyichnoi-ps5-i-ps5-pro/',
        imageUrl:
          'https://c.dns-shop.ru/thumb/st1/fit/300/300/62f82657a96147c52473d5d878c47837/38c6eddd5fb26f039c9c0285bb13e5f6c857b19270bc5209cc070f46db227ce9.jpg.webp',
        videoUrl: null,
        date: 1727129520,
        content: '',
        type: 'blogs',
        groupName: 'Блоги',
        style: null,
        vobler: [],
        parent: {
          url: 'https://club.dns-shop.ru/blog/',
          name: 'Все блоги',
        },
      },
      {
        id: null,
        title:
          'Обзор и сравнение смартфонов POCO F6 Pro, HONOR 200 Pro, realme GT 6 и HUAWEI Pura 70: еще не флагман, уже не бюджетник',
        url: 'https://club.dns-shop.ru/review/t-78-smartfonyi/126631-obzor-i-sravnenie-smartfonov-poco-f6-pro-honor-200-pro-realme/',
        imageUrl:
          'https://c.dns-shop.ru/thumb/st1/fit/300/300/ab3e7d342567512fdf5f19d92505d649/f1b44772a92dc0484ca15965b342df65bffcd8a09f4fddef87e788b28611ee2a.jpg.webp',
        videoUrl: null,
        date: 1726819034,
        content: '',
        type: 'reviews',
        groupName: 'Обзоры',
        style: null,
        vobler: [],
        parent: {
          url: 'https://club.dns-shop.ru/posts/review/',
          name: 'Все обзоры',
        },
      },
      {
        id: '0db4d8f1-5b9e-11ef-9251-0050569d9cb8',
        title: 'Фиксация цен на социально значимые товары',
        url: 'https://www.dns-shop.ru/news/0db4d8f1-5b9e-11ef-9251-0050569d9cb8/',
        imageUrl:
          'https://c.dns-shop.ru/thumb/st1/fit/300/300/87acfa8698d49991bde5abbe0e41fcb1/faec296fffa2724821f7e8f83eb38a0207937c1c1d21545fd31700b327a10aae.jpg.webp',
        videoUrl: null,
        date: 1723766400,
        content: '',
        type: 'news',
        groupName: 'Новости',
        style: null,
        vobler: [
          {
            title: 'Социальная реклама',
            color: '#2fa9c1',
          },
        ],
        parent: {
          url: '/news/',
          name: 'Все новости',
        },
      },
      {
        id: null,
        title: 'Как настроить RGB-подсветку, чтобы получилось стильно и красиво?',
        url: 'https://club.dns-shop.ru/blog/t-228-svetodiodnyie-paneli/125998-kak-nastroit-rgb-podsvetku-chtobyi-poluchilos-stilno-i-krasivo/',
        imageUrl:
          'https://c.dns-shop.ru/thumb/st1/fit/300/300/b8422d4d7b19c264e08448a002716702/8db29497c5eca2bc194f15ecaad8cc2b2ae6f52cbe25f47b430775b78d1c934a.jpg.webp',
        videoUrl: null,
        date: 1726721160,
        content: '',
        type: 'blogs',
        groupName: 'Блоги',
        style: null,
        vobler: [],
        parent: {
          url: 'https://club.dns-shop.ru/blog/',
          name: 'Все блоги',
        },
      },
    ],
    newsCount: 10,
    postsCount: 10,
    reviewsCount: 4,
    banner: {
      title: 'Новый магазин в Перми!',
      image:
        'https://o.dns-shop.ru/original/st1/1898e5ebdb840f24b6df65798b57e316/30bc2f58e81665df0563a6e43a75ab2c932a44377f723b835177c1e55f34812e.jpg',
      url: '/bnr/bnr/redirect/9d05d6b1-57df-406e-a5ba-5385f1c37c3c/',
    },
    tabs: {
      all: 'Все',
      news: 'Новости',
      blogs: 'Блоги',
      reviews: 'Обзоры',
    },
    title: 'Истории',
  },
}

describe('сontent-slider', () => {
  it('renders error state', () => {
    useGetSliderContentQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: true,
    })
    render(<ContentSlider />)
    expect(screen.getByText('Что то пошло не так...')).toBeInTheDocument()
  })

  it('render data', () => {
    useGetSliderContentQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: false,
    })
    render(
      <MemoryRouter>
        <ContentSlider />
      </MemoryRouter>,
    )
    expect(screen.getByText('Старт продаж! Смартфон Infinix ZERO 40 5G')).toBeInTheDocument()
  })

  it('filter', () => {
    useGetSliderContentQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: false,
    })
    render(
      <MemoryRouter>
        <ContentSlider />
      </MemoryRouter>,
    )
    fireEvent.click(screen.getByText('Обзоры').closest('div'))
    expect(screen.getByText(/Обзор и сравнение смартфонов POCO/i)).toBeInTheDocument()

    expect(screen.queryByText(/В чем разница между обычной/i)).not.toBeInTheDocument()
  })
})
