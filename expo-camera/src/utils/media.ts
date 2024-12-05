import path from 'path'

export const videoExtensions = ['.mov', '.mp4', '.m4v']
export type MediaType = 'image' | 'video'

export const getMediaType = (uri: string) => {
  return videoExtensions.includes(path.extname(uri)) ? 'video' : 'image'
}
