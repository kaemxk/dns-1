import { usePosition } from '@/shared/hooks/use-position'
import { useGetCityQuery } from '@/shared/redux/api/configSlice'
import { useEffect, useState } from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { Link } from 'react-router-dom'

export const Geolocation = () => {
  const [city, setCity] = useState<string>(localStorage.getItem('city') || 'Москва')
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const { position } = usePosition()
  const { data, isLoading } = useGetCityQuery(position, { skip: !position })

  useEffect(() => {
    if (!isLoading && data && city !== data) {
      setModalOpen(true)
    }
  }, [city, data, isLoading])

  const handleBtnSuccess = () => {
    if (data) {
      setCity(data)
      localStorage.setItem('city', data)
    }
    setModalOpen(false)
  }

  const handleBtnCancel = () => {
    setModalOpen(false)
  }

  const Modal = () => {
    return (
      <div
        className='absolute top-9 z-50 ml-1 flex w-[320px] max-w-[320px] flex-row flex-wrap rounded-lg bg-white p-[23px] text-[#333] shadow-[0_0_0_1px_rgba(0,0,0,.04),0_4px_4px_rgba(0,0,0,.04),0_20px_40px_rgba(0,0,0,.08)] transition-all min-[320px]:right-0 lg:left-[-20px]'
        data-testid='modal'
      >
        <p className='mb-3 text-base'>
          Ваш город <b>{`${data}`}</b>?
        </p>
        <div>
          <button
            className='bg-gradient-to-t-[#fc8507,#ffa218] hover: hover: btn mr-3 border-none bg-[linear-gradient(to_top,#fc8507,#ffa218)] text-white hover:bg-[linear-gradient(to_top,#fc8507e3,#ffa218e3)]'
            data-testid='modal-btn-success'
            onClick={handleBtnSuccess}
          >
            Всё верно
          </button>
          <button
            className='hover: btn border-none bg-[#f7f7f7] font-normal hover:bg-[#eaeaea]'
            data-testid='modal-btn-cancel'
            onClick={handleBtnCancel}
          >
            Сменить город
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='relative'>
      <Link to='#' className='hover:fill-orange-500 hover:text-orange-500'>
        <span>
          <SlLocationPin data-testid='icon-location' className='mr-1 inline-block' />
        </span>
        <span data-testid='city' className='align-middle'>
          {city}
        </span>
      </Link>
      {modalOpen && <Modal />}
    </div>
  )
}
