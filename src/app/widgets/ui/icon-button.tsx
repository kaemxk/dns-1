import { IconContext } from 'react-icons'
interface PropsIconButton {
  title: string
  icon: JSX.Element
  counter?: number | undefined
  sum?: number
}

export const IconButton = ({ title, icon, counter, sum }: PropsIconButton) => {
  return (
    <div className='icon-button relative'>
      <a
        className='icon-button-counter relative flex h-full w-[90px] flex-col items-center justify-center rounded-xl p-[11px] text-[14px] font-normal leading-[18px] text-[#4e4e4e] transition-[.2s] hover:bg-[#f7f7f7]'
        href='#'
      >
        <span className='icon-button-counter__icon relative h-6 w-6'>
          {counter && (
            <span className='icon-button-counter__badge bold absolute left-[20px] top-[-5px] inline-flex h-4 min-w-4 items-center rounded-[50px] bg-[linear-gradient(0deg,#fc8507_0%,#ffa218_100%)] p-[1px_4px] text-center text-[13px] font-bold text-white shadow-[0_0_0_2px_#fff]'>
              {counter}
            </span>
          )}
          <IconContext.Provider value={{ size: '20px', color: '#AFAFAF' }}>
            {icon}
          </IconContext.Provider>
        </span>
        {sum ? (
          <span className='icon-button-counter__lbl font-bold'>{`${sum} ₽`}</span>
        ) : (
          <span className='icon-button-counter__lbl'>{title}</span>
        )}
      </a>
    </div>
  )
}
