import { TRstatus } from "~/service/TagService"

const genderChoices: { text: string, key: Number }[] = [
  { text: "男性のみ", key: 1 },
  { text: "女性のみ", key: 2 },
  { text: "男女共住", key: 3 },
]

const tagChoices: { text: string, key: Number }[] = [
  { text: "駅から近い", key: 1 },
  { text: "新築", key: 2 },
  { text: "家具付き", key: 3 },
]

const Rstatus: TRstatus = {
  1: "公開",
  2: "非公開"
}

const UserKind: { [kind: number]: string } = {
  1: "一般",
  2: "企業"
}

const UserAuthority: { [key: string]: number } = {
  // 一般ユーザー
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

export { genderChoices, numChoices, Sex, Rstatus, tagChoices, UserKind, UserAuthority }
