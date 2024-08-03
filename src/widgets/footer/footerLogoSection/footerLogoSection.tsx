import React from 'react';

const FooterLogoSection = () => {
  return (
      <div className="py-10 flex justify-between hidden xl:flex">
        <div className="flex">
          <div className="w-[246px] mr-15" style={{marginRight: 60}}>
            <a href="#">
              <div className=" h-4 bg-left bg-no-repeat bg-contain" style={{ backgroundImage: "url('../widgets/footer/images/dns.svg')" }}></div>
            </a>
          </div>
          <div className="w-[268px]">
            <a href="#">
              <div className=" h-4 bg-left bg-no-repeat bg-contain" style={{ backgroundImage: "url('../widgets/footer/images/dnsClub.svg')" }}></div>
            </a>
          </div>
          <div className="w-[268px]">
            <a href="#">
              <div className=" h-4 bg-left bg-no-repeat bg-contain" style={{ backgroundImage: "url('../widgets/footer/images/dnsTechnologies.svg')" }}></div>
            </a>
          </div>
        </div>
        <div className="w-[297px]">
          <a href="#">
            <div className=" h-4 bg-left bg-no-repeat bg-contain" style={{ backgroundImage: "url('../widgets/footer/images/dnsGroup.svg')" }}></div>
          </a>
        </div>
      </div>
  );
};

export default FooterLogoSection;
