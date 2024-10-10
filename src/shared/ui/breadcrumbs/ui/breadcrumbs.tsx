import { Link } from 'react-router-dom'

import type { ICrumb } from '../model/interface'

interface IBreadcrumbsProps {
  crumbs: ICrumb[] | null | undefined
}

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ crumbs = [] }: IBreadcrumbsProps) => {
  if (!crumbs || !crumbs.length) return null

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
