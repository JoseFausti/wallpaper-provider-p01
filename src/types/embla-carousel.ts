import type { EmblaOptionsType } from "embla-carousel"

export type WallpaperPropType = {
  id: number
  title: string
  description: string
  categories: string[]
  image_url: string
  width: number
  height: number
  public_id: string
}

export type EmblaPropType = {
  slides: WallpaperPropType[]
  options?: EmblaOptionsType
}