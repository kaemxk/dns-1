import { Link, useLocation } from 'react-router-dom'

import { useGetCatalogMenuQuery } from '@/shared/redux/api/baseApi'

import searchPath from '../utils'

export const Breadcrumbs: React.FC = () => {
  type About = Array<{ link: string; title: string }>
  // add querys
  const { data: catalog } = useGetCatalogMenuQuery()
  const about: About = [
    { link: '/about/partners', title: 'Сотрудничество - DNS' },
    { link: '/about/career', title: 'Карьера' },
  ]
  const url = useLocation()
  let data

  const urlDict: Record<string, string> = {
    '/catalog': 'Каталог',
    '/about': 'О компании - DNS',
    '/help': 'Помощь',
  }

  const baseUrl = Object.keys(urlDict).find(key => url.pathname.startsWith(key))

  if (!baseUrl) return null // component should not be rendered unless url is correct
  if (baseUrl === '/catalog') {
    data = catalog
  } else {
    // assign data from query
    data = about
  }
  // ISearchData interface is not generic
  // add missing types to ISearchData if needed
  const path = searchPath(data || [], url.pathname) || []

  const crumbPath = path?.map(({ url, title, link }) => ({ url: link || url, title }))

  const crumbs = [{ title: urlDict[baseUrl], url: baseUrl }, ...crumbPath]

  return (
    <ol className='breadcrumb flex items-center gap-2 text-[12px]'>
      {crumbs.map((crumb, i) => (
        <>
          {i ? <li className='text-gray-500'> &gt; </li> : null}
          <li key={crumb.title}>
            {crumbs[i + 1] ? (
              <Link
                className='transition-colors duration-300 hover:text-orange-500'
                to={crumb.url || '/'}
              >
                {crumb.title}
              </Link>
            ) : (
              <span className='text-gray-500'>{crumb.title}</span>
            )}
          </li>
        </>
      ))}
    </ol>
  )
}
