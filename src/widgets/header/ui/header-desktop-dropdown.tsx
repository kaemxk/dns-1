import clsx from 'clsx'

interface PropsDropdown {
  open: boolean
}

export const HeaderDesktopDropdown = ({ open }: PropsDropdown) => {
  const dropdownMenuItem = [
    { title: 'Доставка', href: '#' },
    { title: 'Бонусная программа', href: '#' },
    { title: 'Узнать статус заказа', href: '#' },
    { title: 'Обмен, возврат, гарантия', href: '#' },
    { title: 'Кредиты', href: '#' },
    { title: 'Сервисные центры', href: '#' },
  ]

  const classesDropdownList = clsx({
    ['dropdown-content left-[-50px] top-[35px] z-[999] min-w-40 rounded-xl border-t-[#ddd] bg-white p-6 shadow']:
      true,
    ['hidden']: !open,
  })

  return (
    <ul tabIndex={0} className={classesDropdownList}>
      {dropdownMenuItem.map(item => {
        return (
          <li key={item.title}>
            <a
              href={item.href}
              className='header-top-menu__common-link_child mb-2 block w-full cursor-pointer whitespace-nowrap p-0 leading-6 text-[#333] hover:bg-inherit hover:text-orange-500'
            >
              {item.title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
