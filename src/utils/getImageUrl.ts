export const getImageUrl = (url: string | undefined) => {
  if (process.env.NEXT_PUBLIC_IMAGE_HOST) {
    return `${url}`
  }

  if (url) {
    return url
  }

  return null
}
