import clsx from 'clsx'

interface ButtonProps {
  filter: string
  setFilter: (filter: string) => void
  buttonLabel: string
}

export const FilterButton = ({ filter, setFilter, buttonLabel }: ButtonProps) => {
  return (
    <div
      onClick={() => setFilter(buttonLabel)}
      className={clsx(
        'content-slider-bottom__catalog mb-0 flex h-[36px] cursor-pointer flex-row rounded-lg py-[7px] pl-5 pr-4 text-center text-white',
        {
          'bg-white bg-opacity-15 font-bold shadow-xl hover:bg-opacity-20': filter === buttonLabel,
          'bg-gray-100 hover:bg-gray-200': filter !== buttonLabel,
        },
      )}
    >
      <span className='content-slider__bottom-title mr-0 select-none text-black'>
        {buttonLabel}
      </span>
    </div>
  )
}
