export type StrapiMediaFormat = {
  url: string
}

export type StrapiMediaFile = {
  documentId: string
  formats: {
    small: StrapiMediaFormat
    thumbnail: StrapiMediaFormat
  }
  url: string
}
