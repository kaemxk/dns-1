import { useLocation } from 'react-router-dom'

import { useGetCatalogMenuQuery } from '@/shared/redux/api/baseApi'

import type { ICrumb } from './interface'
import searchPath from './utils'

export const useGetCrumbs = (pathDict: Record<string, string>): ICrumb[] | undefined => {
  // add queries
  const { data: catalog } = useGetCatalogMenuQuery()
  const about = [
    { link: '/about/partners', title: 'Сотрудничество - DNS' },
    { link: '/about/career', title: 'Карьера' },
  ]
  const url = useLocation()

  const baseUrl = Object.keys(pathDict).find(key => url.pathname.startsWith(key))

  if (!baseUrl) return undefined // url was not found
  // url was found example: '/catalog'
  let data
  switch (baseUrl) {
    case '/catalog':
      data = catalog
      break
    case '/about':
      data = about
      break
    default:
      data = undefined
  }
  // ISearchData interface is not generic
  // add missing types to ISearchData if needed
  const path = searchPath(data || [], url.pathname) || []

  if (!path.length) {
    // exceptional pathes
    if (baseUrl === '/catalog') {
      return [
        { title: 'DNS', url: '/' },
        { title: 'Каталог товаров', url: '' },
      ]
    }
  }

  const crumbPath = path?.map(({ url, title, link }) => ({ url: link || url || '', title }))

  const crumbs = [{ title: pathDict[baseUrl], url: baseUrl }, ...crumbPath]

  return crumbs
}
