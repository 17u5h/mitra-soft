export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type PostsPromise = {
  jsonData: Post[]
  json: () => void
}
