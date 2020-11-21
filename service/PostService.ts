import { Post } from "~/grpc/post_pb"
import { PostItem } from "~/assets/ts/constructor/PostItem"
import { PostServiceClient } from "~/grpc/PostServiceClientPb"

let proxyServerUrl: string = ""
const url = process.env.NUXT_ENV_PROXY_SERVER_URL

if (typeof url === "string") {
  proxyServerUrl = url
}

// Client credentials
const postServiceClient: PostServiceClient = new PostServiceClient(
  proxyServerUrl, {}, {}
)

// tPostItem Formで編集する物件投稿の型
export type tPostItem = {
  postID: number
  status: number
  title: string
  content: string
  maxNum: number
  gender: number
  tags: number[]
  createUserID: number
  updateUserID: number
}
const defaultPostItem: tPostItem = {
  postID: 0,
  status: 0,
  title: "",
  content: "",
  maxNum: 1,
  gender: 0,
  tags: [],
  createUserID: 0,
  updateUserID: 0
}

export class PostService {
  makePost(postItem: tPostItem): Post {
    const post = new Post()
    post.setId(postItem.postID)
    // post.setStatus(postItem.status)
    post.setTitle(postItem.title)
    post.setContent(postItem.content)
    post.setMaxNum(postItem.maxNum)
    post.setGender(postItem.gender)
    post.setTagsList(postItem.tags)
    post.setCreateuserId(postItem.createUserID)
    post.setUpdateuserId(postItem.updateUserID)
    return post
  }

  makeDefaultPost(): tPostItem {
    return defaultPostItem
  }

  getPost(post: Post): tPostItem {
    return new PostItem(
      post.getId(),
      0,
      // Rstatus[post.getStatus()],
      post.getTitle(),
      post.getContent(),
      post.getMaxNum(),
      post.getGender(),
      post.getTagsList(),
      post.getCreateuserId(),
      post.getUpdateuserId(),
    )
  }
}

export default PostService

export { postServiceClient }
