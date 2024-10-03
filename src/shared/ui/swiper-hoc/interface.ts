interface ISwiperHOCProps<T> {
  children: T extends (infer U)[] ? (item: U, index: number) => React.ReactNode : never
  data: T | undefined
  id: string
  isMobile?: boolean
  swiperClassName?: string
  swiperWrapperClassName?: string
  swiperSlideClassName?: string
}

export default ISwiperHOCProps
