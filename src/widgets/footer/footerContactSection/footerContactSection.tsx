import React from 'react'

const FooterContactSection = () => {
    return (
        <section className="flex flex-col items-start justify-start text-white text-sm flex-shrink-0 md:w-[297px]" >
            <h6
                className="w-full pb-5 mb-0 border-b border-gray-600 text-lg font-bold hidden md:block ">Оставайтесь на связи</h6>
            <p className="font-bold pt-5 mb-5">
                <a href="tel:8-800-7707-999">8-800-7707-999</a>
                <span> (c 03:00 до 22:00)</span>
            </p>
            <div className="flex items-center justify-between pt-5 pb-5 border-b-gray-200 border-b border-solid w-full border-t-gray-200 border-t md:pt-0 md:pb-0 md:border-0">
                <a href="#">
                    Адреса магазинов в г. Нижний Новгород
                </a>
                <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" width="7" height="12" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M.48.2a.625.625 0 01.884 0l5.358 5.358a.625.625 0 010 .884L1.364 11.8a.625.625 0 11-.884-.884L5.396 6 .48 1.084A.625.625 0 01.48.2z" fill="#AFAFAF"/></svg>
            </div>
            <div className="flex w-full pr-4 mt-5 mb-4 justify-between -order-1 md:order-1">
                <div className="flex">
                    <a href="#">
                        <div className="h-9 w-9 mr-2 bg-center bg-no-repeat bg-contain transition-filter duration-300 hover:brightness-115" style={{ backgroundImage: "url('../widgets/footer/images/VK.svg')" }}></div>
                    </a>
                    <a href="#">
                        <div className="h-9 w-9 bg-center bg-no-repeat bg-contain transition-filter duration-300 hover:brightness-115" style={{ backgroundImage: "url('../widgets/footer/images/youtube.svg')" }}></div>
                    </a>
                </div>
                <div className="flex gap-6">
                    <a href="#">
                        <div className="h-9 w-17 bg-center bg-no-repeat bg-contain transition-filter duration-300 hover:brightness-115" style={{ backgroundImage: "url('../widgets/footer/images/spb.svg')", width: 68 }}></div>
                    </a>
                    <a href="#">
                        <div className="h-9 w-9 bg-center bg-no-repeat bg-contain transition-filter duration-300 hover:brightness-115" style={{ backgroundImage: "url('../widgets/footer/images/akit.svg')" }}></div>
                    </a>
                </div>
            </div>
            <div className="text-sm text-gray-400 leading-5 mb-5 order-1 hidden md:block">Нашли ошибку на сайте? Выделите текст с ошибкой, нажмите Ctrl+Enter и напишите нам</div>
        </section>
    )
}

export default FooterContactSection