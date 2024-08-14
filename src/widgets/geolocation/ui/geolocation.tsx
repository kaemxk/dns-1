import { useGetCityQuery } from '@/shared/redux/api/configSlice'
import { useEffect, useState } from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { Link } from 'react-router-dom'

interface PropsGeolocation {
  lat: number
  lon: number
}

export const Geolocation = (position: PropsGeolocation) => {
  const [city, setCity] = useState<string>(localStorage.getItem('city') || 'Москва')
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const { data, isLoading } = useGetCityQuery(position)

  useEffect(() => {
    if (!isLoading) {
      if (!localStorage.getItem('city')) {
        if (data?.results[0].components.city) {
          setModalOpen(true)
        }
      }
    }
  }, [data?.results, isLoading])

  const handleBtnSuccess = () => {
    if (data) {
      setCity(data?.results[0].components.city)
      localStorage.setItem('city', data?.results[0].components.city)
    }
    setModalOpen(false)
  }

  const handleBtnCancel = () => {
    setModalOpen(false)
  }

  const Modal = () => {
    return (
      <div className='modal-city absolute top-9 z-50 ml-1 flex w-[320px] max-w-[320px] flex-row flex-wrap rounded-lg bg-white p-[23px] text-[#333] shadow-[0_0_0_1px_rgba(0,0,0,.04),0_4px_4px_rgba(0,0,0,.04),0_20px_40px_rgba(0,0,0,.08)] transition-all min-[320px]:right-0 lg:left-[-20px]'>
        <p className='modal-city__info mb-3 text-base'>
          Ваш город <b>{`${data?.results[0].components.city}`}</b>?
        </p>
        <div className='modal-city__buttons'>
          <button
            className='bg-gradient-to-t-[#fc8507,#ffa218] hover: hover: btn mr-3 border-none bg-[linear-gradient(to_top,#fc8507,#ffa218)] text-white hover:bg-[linear-gradient(to_top,#fc8507e3,#ffa218e3)]'
            onClick={handleBtnSuccess}
          >
            Всё верно
          </button>
          <button
            className='hover: btn border-none bg-[#f7f7f7] font-normal hover:bg-[#eaeaea]'
            onClick={handleBtnCancel}
          >
            Сменить город
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='city-select relative'>
      <Link
        to='#'
        className='header-top-menu__common-link hover:fill-orange-500 hover:text-orange-500'
      >
        <span className='city-select__icon'>
          <SlLocationPin className='mr-1 inline-block' />
        </span>
        <span className='city-select__text align-middle'>{city}</span>
      </Link>
      {modalOpen && <Modal />}
    </div>
  )
}
