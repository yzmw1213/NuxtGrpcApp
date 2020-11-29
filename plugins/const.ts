import { TRstatus } from "~/service/TagService"

const genderChoices: { text: string, key: Number }[] = [
  { text: "男性のみ", key: 1 },
  { text: "女性のみ", key: 2 },
  { text: "男女共住", key: 3 },
]

const Rstatus: TRstatus = {
  1: "公開",
  2: "非公開"
}

const UserKind: { [kind: number]: string } = {
  1: "個人",
}

const UserAuthority: { [key: string]: number } = {
  // 個人ユーザー
  AUTHORITY_NORMAL_USER: 1,
  // 企業ユーザー
  AUTHORITY_COMPANY_USER: 2,
  // 管理者ユーザー
  AUTHORITY_SUPER_USER: 9,
}

const Sex: {[key: number]: string} = {
  1: "男性",
  2: "女性",
  9: "その他",
}

const numChoices: Number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10]

export { genderChoices, numChoices, Sex, Rstatus, UserKind, UserAuthority }
