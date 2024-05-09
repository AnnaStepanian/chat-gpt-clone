export interface IUserLogin {
  login: string;
  password: string;
}

export interface IUserLoginResponse {
  login: string;
  password: string;
  premium: boolean;
}
