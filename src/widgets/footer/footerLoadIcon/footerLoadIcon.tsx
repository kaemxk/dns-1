import React from 'react';

const FooterLoadIcon = () => {
  return (
      <div className="flex">
        <div className="w-full mb-5">
          <div className="flex flex-wrap gap-3">
            <a href="#">
              <div className="w-[135px] h-10 bg-center bg-no-repeat bg-contain transition-filter duration-300 hover:brightness-115" style={{ backgroundImage: "url('../widgets/footer/images/googlePlay.svg')" }}></div>
            </a>
            <a href="#">
              <div className="w-[135px] h-10 bg-center bg-no-repeat bg-contain transition-filter duration-300 hover:brightness-115" style={{ backgroundImage: "url('../widgets/footer/images/AppGallery.svg')" }}></div>
            </a>
            <a href="#">
              <div className="w-[135px] h-10 bg-center bg-no-repeat bg-contain transition-filter duration-300 hover:brightness-115" style={{ backgroundImage: "url('../widgets/footer/images/ruStore.svg')" }}></div>
            </a>
            <a href="#">
              <div className="w-[135px] h-10 bg-center bg-no-repeat bg-contain transition-filter duration-300 hover:brightness-115" style={{ backgroundImage: "url('../widgets/footer/images/appStore.svg')" }}></div>
            </a>
          </div>
        </div>
      </div>
  );
};

export default FooterLoadIcon;
