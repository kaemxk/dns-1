import { useResize } from '@/shared/hooks/use-resize';
import { ProductsMobile } from './products-mobile';
import { ProductsDesktop } from './products-desktop';
import { useMemo } from 'react';
import clsx from 'clsx';

export const SliderProducts = () => {
    const windowWidth = useResize()
    const isMobile = useMemo(() => windowWidth <= 992, [windowWidth])

    return (
        <>
            <div className={clsx(
                'w-fit mb-[12px] font-bold',
                isMobile ? 'text-[18px] mx-[16px]' : 'text-[24px] mx-0'
            )}>
                Вы недавно смотрели
            </div>
            {isMobile ? <ProductsMobile /> : <ProductsDesktop />}
        </>
    );
};
