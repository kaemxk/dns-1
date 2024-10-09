const FooterLogoSection = () => {
  return (
    <div data-testid='footer-logo-section' className='hidden justify-between py-10 xl:flex'>
      <div className='flex'>
        <div className='mr-[60px] w-[246px]'>
          <a href='#'>
            <div
              className='h-4 bg-contain bg-left bg-no-repeat'
              style={{ backgroundImage: "url('../widgets/footer/ui/images/dns.svg')" }}
            ></div>
          </a>
        </div>
        <div className='w-[268px]'>
          <a href='#'>
            <div
              className='h-4 bg-contain bg-left bg-no-repeat'
              style={{ backgroundImage: "url('../widgets/footer/ui/images/dnsClub.svg')" }}
            ></div>
          </a>
        </div>
        <div className='w-[268px]'>
          <a href='#'>
            <div
              className='h-4 bg-contain bg-left bg-no-repeat'
              style={{ backgroundImage: "url('../widgets/footer/ui/images/dnsTechnologies.svg')" }}
            ></div>
          </a>
        </div>
      </div>
      <div className='w-[297px]'>
        <a href='#'>
          <div
            className='h-4 bg-contain bg-left bg-no-repeat'
            style={{ backgroundImage: "url('../widgets/footer/ui/images/dnsGroup.svg')" }}
          ></div>
        </a>
      </div>
    </div>
  )
}

export default FooterLogoSection
