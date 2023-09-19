export interface ChildrenModel {
  children: React.ReactNode
}

export interface CurrentUser {
  country: string
  display_name: string
  email: string
  explicit_content: ExplicitContent
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: any[]
  product: string
  type: string
  uri: string
}

interface ExplicitContent {
  filter_enabled: boolean
  filter_locked: boolean
}

interface ExternalUrls {
  spotify: string
}

interface Followers {
  href: null
  total: number
}
