import React, { useEffect, useState } from 'react'

const ProfileWishlist: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='mx-auto box-content w-[calc(100%-32px)] min-w-[312px] px-4'>
      <h1 className='mb-4 mt-4 text-3xl font-bold'>Избранное</h1>
      <div className='profile-wishlist__tab-content'>
        <div className='profile-wishlist__empty m-0 mb-6 flex h-[515px] flex-col items-center justify-center rounded-lg bg-white shadow shadow-md'>
          <div
            className={`profile-wishlist__empty-image mb-3 h-[243px] w-[379px] bg-center bg-no-repeat ${isMobile ? 'bg-[url(../pages/profile-wishlist/ui/images/4a7b24ba2dd70d4e824a.png)] bg-cover' : 'bg-[url(../pages/profile-wishlist/ui/images/4a7b24ba2dd70d4e824a.png)] bg-contain'}`}
          ></div>

          <div className='profile-wishlist__empty-text mb-5 text-base text-gray-500'>
            В списке пока нет ни одного избранного товара
          </div>

          <div className='profile-wishlist__btn-wrapper mb-6 flex h-[44px] w-[168px] items-center justify-center rounded-lg border border-transparent bg-gradient-to-t from-[#fc8507] to-[#ffa218] text-white'>
            <button onClick={() => (window.location.href = '/catalog')}>Перейти в каталог</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileWishlist
