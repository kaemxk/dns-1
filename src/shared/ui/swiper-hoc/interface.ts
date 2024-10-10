interface ISwiperHOCProps<T> {
  children: T extends (infer U)[] ? (item: U, index: number) => React.ReactNode : never
  data: T | undefined
  id: string
  isMobile?: boolean
  swiperClassName?: string
  swiperWrapperClassName?: string
  swiperSlideClassName?: string
  optionalContent?: React.ReactNode // Новое свойство для опционального контента
  swiperSlideOptContentClassName?: string
}

export default ISwiperHOCProps
