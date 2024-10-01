export interface SliderProduct {
  id: string
  imageUrl: string
  title: string
  rating: number
  opinionsCount: number
  price: number
  specs: string
  creditMonthlyPayment: number
}
export interface ProductsProps {
  data: SliderProduct[]
  onDelete: (id: string) => void
}
