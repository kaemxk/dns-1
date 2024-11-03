import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'

const urlDict = new Map([
  ['catalog', 'Каталог'],
  ['krasota-i-zdorove', 'Красота и здоровье'],
  ['ukladka-i-sushka-volos', 'Укладка и сушка волос'],
  ['about', 'О компании - DNS'],
  ['career', 'Карьера'],
  ['partners', 'Партнеры - DNS'],
])
// Список url, которые отключают breadcrumbs если этот url сейчас открыт
const exeptions = new Set(['help', 'service-center', 'profile-wishlist'])

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation()
  // filter - удаляет пустые значения
  const currentPath = pathname.split('/').filter(Boolean)

  const crumbs = currentPath.map(url => ({
    title: urlDict.get(url) || 'Not found',
    url,
  }))

  if (crumbs.length === 0) return null
  // случай, когда "DNS" в начале не нужен
  // dns.ru/help возвратит null, dns.ru/help/delivery возвращает breadcrumbs
  if (crumbs.length === 1 && exeptions.has(crumbs[0].url)) return null
  // будет всегда
  crumbs.unshift({ title: 'DNS', url: '/' })

  return (
    <ol className='breadcrumb flex items-center gap-2 text-[12px]'>
      {crumbs.map(({ title, url }, i) => (
        <Fragment key={url}>
          {i === 0 && <li className='text-gray-500'> &gt; </li>}
          <li>
            {i === crumbs.length - 1 ? (
              <span className='text-gray-500'>{title}</span>
            ) : (
              <Link
                className='transition-colors duration-300 hover:text-orange-500'
                to={`/${currentPath.slice(0, i).join('/')}`}
              >
                {title}
              </Link>
            )}
          </li>
        </Fragment>
      ))}
    </ol>
  )
}
