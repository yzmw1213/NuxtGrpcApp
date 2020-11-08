import { Component, Vue, Emit, Watch } from "nuxt-property-decorator"
import { Error } from "grpc-web"
import { Sex, UserKind } from "~/plugins/const"

import {
  CreateUserRequest,
  CreateUserResponse,
  ResponseStatus,
  User,
} from "~/grpc/user_pb"

import { tUserkind, userServiceClient, UserService, tUserItem } from "~/service/UserService"

@Component({})
export default class SignUp extends Vue {
  uService: UserService
  showPassword: boolean = false
  showConfirmPassword: boolean = false
  confirmPassword: string = ""
  confirmCheck: string = ""
  confirmMessage: string = "※登録後、ユーザー区分・性別は変更できません。"
  editedUser: tUserItem = {
    userID: 0,
    userName: "abcdefg",
    email: "a@a.com",
    profileText: "",
    gender: 1,
    password: "abcdefg",
    authority: 1,
  }

  created() {
    this.uService = new UserService()
    console.log(UserKind[1])
    console.log(UserKind[2])
    console.log(this.sex)
  }

  userKind: tUserkind = UserKind
  sex: typeof Sex = Sex

  post() {
    if (this.confirmPassword !== this.editedUser.password) {
      this.$setStatusMessage("PASSWORD_NOT_SAME_ERROR")
      return
    }
    const user = this.uService.makeUser(this.editedUser)
    this.create(user)
  }

  create(user: User) {
    const request = new CreateUserRequest()
    request.setUser(user)
    userServiceClient.createUser(request, {}, (err, res: CreateUserResponse) => {
      this.handleCreateUpdateResponse(res, err)
      if (err == null) {
        console.log("go login")
        this.cancelCreateUser()
      }
    })
  }

  handleCreateUpdateResponse(res: CreateUserResponse, err: Error) {
    if (err != null) {
      console.log(err.message)
      // status.codeに応じたダイアログ表示
      this.$setStatusMessage(err.message)
    } else {
      console.log(res)
      const status: ResponseStatus | undefined = res.getStatus()
      const code = status!.getCode()
      // status.codeに応じたダイアログ表示
      this.$setStatusMessage(code)
    }
  }

  @Emit("back-to-login")
  cancelCreateUser() {
  }

  @Watch("editedUser.authority")
  onChangeStatus() {
    // 個人が選ばれた場合
    if (this.editedUser.authority === 1) {
      this.confirmMessage = "※登録後、ユーザー区分・性別は変更できません。"
    }
    // 企業が選ばれた場合、性別には0を設定する
    if (this.editedUser.authority === 2) {
      this.editedUser.gender = 0
      this.confirmMessage = "※登録後、ユーザー区分は変更できません。"
    }
  }
}
