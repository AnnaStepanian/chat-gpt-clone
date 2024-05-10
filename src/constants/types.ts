export interface IUserLogin {
  login: string;
  password: string;
}

export interface IUserLoginResponse {
  login: string;
  password: string;
  premium: boolean;
}

export type UserType = "user" | "gpt";

export interface IMessage {
  message: string;
  type: UserType;
}
