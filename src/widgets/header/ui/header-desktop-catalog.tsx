import { useGetCatalogMenuQuery } from '@/shared/redux/api/baseApi'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export interface CatalogItem {
  id: string
  title: string
  subtitles: string[]
  searchUid: string
  url: string
  imageUrl: string
  imageMenuUrl: string
  count: number
  childs: CatalogItem[]
}

export const HeaderDesktopCatalog = () => {
  const { data } = useGetCatalogMenuQuery()
  const [activeCategory, setActiveCategory] = useState<CatalogItem[]>([])
  const [activeCategoryId, setActiveCategoryId] = useState<string>('')

  useEffect(() => {
    if (data) {
      setActiveCategory(data[0].childs)
      setActiveCategoryId(data[0].id)
    }
  }, [data])

  const handleMouseOverCategory = (item: CatalogItem[], id: string) => {
    setActiveCategory(item)
    setActiveCategoryId(id)
  }

  const classesCategory = (id: string): string =>
    clsx(
      'catalog-menu__root-item mb-3 box-border flex h-fit w-[238px] cursor-pointer items-center border-l-2 p-[7px_0_7px_12px]',
      { 'border-orange-400 text-orange-400': id === activeCategoryId },
      { 'border-white': id !== activeCategoryId },
    )

  return (
    <>
      <div className='catalog-menu-rootmenu relative h-full rounded-xl bg-white pb-6 pt-6'>
        {data &&
          data.map(item => {
            return (
              <div
                onMouseOver={() => handleMouseOverCategory(item.childs, item.id)}
                key={item.id}
                className={classesCategory(item.id)}
              >
                <Link to={item.url} className='flex items-center'>
                  <span
                    style={{ backgroundImage: `url("${item.imageMenuUrl}")` }}
                    className='mr-4 block h-5 w-6 bg-contain bg-center bg-no-repeat text-center align-middle'
                  ></span>
                  <span className='block w-[216px]'>{item.title}</span>
                </Link>
              </div>
            )
          })}
      </div>
      <div className='catalog-submenu overflow-x-visible overflow-y-visible rounded-r-xl bg-white pb-4 pl-5 pr-6 pt-6 xl:w-[860px]'>
        {activeCategory.map(category => {
          return (
            <div key={category.id} className='mb-4'>
              <Link
                to={category.url}
                className='bold mb-3 block text-[16px] font-bold transition-all hover:text-orange-400'
              >
                {category.title}
              </Link>
              <div className='catalog-submenu__second-level-wrap relative flex flex-wrap items-center gap-x-5 gap-y-1 text-[12px]'>
                {category.childs.map(child => {
                  return (
                    <div
                      key={child.title}
                      className='flex w-full max-w-[210px] flex-wrap xl:max-w-[254px]'
                    >
                      <Link to={child.url} className='hover:text-orange-400'>
                        {child.title}
                        <span className='ml-1 text-gray-500 hover:text-gray-500'>
                          {child.count}
                        </span>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
