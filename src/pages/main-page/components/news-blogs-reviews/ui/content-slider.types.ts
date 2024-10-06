export interface SliderContent {
  message: string
  data: {
    items: Item[]
    tabs: {
      [key: string]: string
    }
  }
}

export interface Item {
  id: string
  title: string
  url: string
  imageUrl: string
  videoUrl: string | null
  date: number
  content: string
  type: string
  groupName: string
  style: string | null
  vobler: Vobler[]
  parent: Parent
}

export interface Vobler {
  title: string
  color: string
}

export interface Parent {
  url: string
  name: string
}
