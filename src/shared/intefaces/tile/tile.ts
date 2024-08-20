export interface ITile {
  variant?: 'story-card' | 'feature-card' | 'goods-card'
  styles?: string
  backgroundColor?: string
  borderRadius?: string
  srcImage?: string
  handleClick?: () => void
  children?: React.ReactNode
}

export interface ITileVariant {
  handleClick: () => void
  className?: string
  srcImage: string
  children: React.ReactNode
}

export interface IClassName {
  backgroundColor: string
  borderRadius: string
  styles?: string
}
