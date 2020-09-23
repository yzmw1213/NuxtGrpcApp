import { Component, Vue, Emit } from "nuxt-property-decorator"
import ShowPosts from "~/components/ui/ShowPosts.vue"
@Component({
  components: {
    ShowPosts,
  }
})
  
export default class Home extends Vue {
  posts: { post_id: string,user_id: string, user_name: string, content: string}[] = [
    {
      post_id: "POST00000001",
      user_id: "john1234",
      user_name: "ジョン",
      content: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    },
    {
      post_id: "POST00000002",
      user_id: "ben3456",
      user_name: "ベン",
      content: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    }
  ]
  
  // 選択されたユーザーIDをEmit
  @Emit('show-user')
  showUser(user_id: string): string {
    return user_id
  }
  
  mounted() {
    console.log(this.posts)
  }
}