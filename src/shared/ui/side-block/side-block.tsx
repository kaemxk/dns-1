import { IconContext } from 'react-icons'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface SideBlockProps {
  top: {
    title: string
    href: string
    active?: boolean
    icon?: JSX.Element
  }[]
  bottom: {
    title: string
    href: string
  }[]
}

const SideBlock: React.FC<SideBlockProps> = ({ top, bottom }: SideBlockProps) => {
  return (
    <div className='w-[280px] overflow-hidden rounded-lg bg-white shadow-[0_1px_2px_rgba(0,0,0,.16)]'>
      <div className='flex w-full flex-col border-b-[1px] border-[#eee] pb-3 pt-3'>
        {top.map(({ title, href, active, icon }) => (
          <Link
            key={title}
            className={`${active ? 'border-l-[3px] border-l-orange-500 pl-3 text-orange-500' : 'pl-6'} group flex gap-4 py-3 pr-4 transition-colors duration-300 hover:text-orange-500`}
            to={href}
          >
            <IconContext.Provider
              value={{
                size: '20px',
                className: `${active ? 'text-orange-500' : 'text-[#AFAFAF]'} group-hover:text-orange-500 transition-colors duration-300`,
              }}
            >
              {icon}
            </IconContext.Provider>
            {title}
          </Link>
        ))}
      </div>
      <div className='flex w-full flex-col pb-3 pt-3'>
        {bottom.map(({ title, href }) => (
          <Link key={title} className='relative inline-block px-4 py-3 text-[#0d61af]' to={href}>
            {title}
            <IconContext.Provider
              value={{ className: 'text-[#d9d9d9] right-4 inline absolute top-4' }}
            >
              <MdOutlineArrowOutward />
            </IconContext.Provider>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBlock
