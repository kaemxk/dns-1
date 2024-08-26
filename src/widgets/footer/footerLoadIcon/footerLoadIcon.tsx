const FooterLoadIcon = () => {
  return (
    <div className='flex'>
      <div className='mb-5 mt-5 w-full'>
        <div className='flex flex-wrap gap-3'>
          <a href='#'>
            <div
              className='transition-filter hover:brightness-115 h-10 w-[135px] bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/images/googlePlay.svg')" }}
            ></div>
          </a>
          <a href='#'>
            <div
              className='transition-filter hover:brightness-115 h-10 w-[135px] bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/images/AppGallery.svg')" }}
            ></div>
          </a>
          <a href='#'>
            <div
              className='transition-filter hover:brightness-115 h-10 w-[135px] bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/images/ruStore.svg')" }}
            ></div>
          </a>
          <a href='#'>
            <div
              className='transition-filter hover:brightness-115 h-10 w-[135px] bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/images/appStore.svg')" }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterLoadIcon
