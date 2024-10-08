const FooterLoadIcon = () => {
  return (
    <div data-testid='footer-load-icon' className='flex'>
      <div className='mb-5 mt-5 w-full'>
        <div className='flex flex-wrap gap-3'>
          <a href='#'>
            <div
              data-testid='footer-load-icon-item'
              className='transition-filter hover:brightness-115 h-10 w-[135px] bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/ui/images/googlePlay.svg')" }}
            ></div>
          </a>
          <a href='#'>
            <div
              data-testid='footer-load-icon-item'
              className='transition-filter hover:brightness-115 h-10 w-[135px] bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/ui/images/AppGallery.svg')" }}
            ></div>
          </a>
          <a href='#'>
            <div
              data-testid='footer-load-icon-item'
              className='transition-filter hover:brightness-115 h-10 w-[135px] bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/ui/images/ruStore.svg')" }}
            ></div>
          </a>
          <a href='#'>
            <div
              data-testid='footer-load-icon-item'
              className='transition-filter hover:brightness-115 h-10 w-[135px] bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/ui/images/appStore.svg')" }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterLoadIcon
