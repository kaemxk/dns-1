export interface ITile {
  variant: 'story-card' | 'feature-card' | 'goods-card'
  className?: string
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

export interface ITileStory extends ITileVariant {
  borderRadius: string
}
