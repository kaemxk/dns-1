import { Link } from 'react-router-dom'

export const NeedMore = () => {
  return (
    <div className='need-more-container mr-2 h-[92px] w-[280px]'>
      <Link
        className='need-more_button after:content after:border-r-gray flex h-[92px] w-[280px] flex-col rounded-t-xl border-[1px] border-gray-100 py-[25px] pl-[20px] pr-[51px] text-[14px] contrast-100 transition-[.2s] after:absolute after:bottom-6 after:right-6 after:h-3 after:w-3 after:rotate-45 after:rounded-sm after:border-[2px] after:border-b-transparent after:border-l-transparent after:contrast-75 hover:bg-[#f7f7f7]'
        to='#'
      >
        <div className='icon-button-counter__badge text-[18px] font-bold text-gray-800 contrast-100'>
          Мало?
        </div>
        <div className=''>Читать все новости DNS</div>
      </Link>
      <Link
        className='need-more_button after:content after:border-r-gray flex h-[128px] w-[280px] flex-col rounded-b-xl border-[1px] border-gray-100 py-[25px] pl-[20px] pr-[51px] text-[14px] contrast-100 transition-[.2s] after:absolute after:bottom-16 after:right-6 after:h-3 after:w-3 after:rotate-45 after:rounded-sm after:border-[2px] after:border-b-transparent after:border-l-transparent after:contrast-75 hover:bg-[#f7f7f7]'
        to='#'
      >
        {/* padding: 25px 51px 25px 20px */}
        <div className='text-[16px] text-gray-800 contrast-100'>
          А еще у нас есть портал про технологии, игры и IT
        </div>
        <img
          src='https://a.dns-shop.ru/homepage//images/0dc907ea2a4adb5d527c.png'
          className='mt-3 h-[18px] w-[111px]'
        />
      </Link>
    </div>
  )
}
