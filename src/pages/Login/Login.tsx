import React, { useState } from 'react';
import axios from 'axios';

//styles
import * as S from './Login.styled';
import { IUserLogin, IUserLoginResponse } from '../../constants/types';

export const Login: React.FC = () => {
  const [userData, setUserData] = useState<IUserLogin>({
    login: '',
    password: ''
  });

  const handleChangeUserData = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitLoginForm = async () => {
    const response = await axios.post<IUserLoginResponse>(process.env.REACT_APP_API_URL || 'http://example.com/api', userData);

    if (response.data.login === userData.login) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  }

  return (
    <S.LoginContainer>
      <S.LoginTitle>Login into your account</S.LoginTitle>
      <S.LoginForm>
        <S.LoginLabel>
          <span>Login</span>
          <S.LoginInput
            name="login"
            type="login"
            placeholder="Enter your login"
            value={userData.login}
            onChange={handleChangeUserData}
          />
        </S.LoginLabel>
        <S.LoginLabel>
          <span>Password</span>
          <S.LoginInput
            name="password"
            type="password"
            value={userData.password}
            placeholder="Enter your password"
            onChange={handleChangeUserData}
          />
        </S.LoginLabel>
        <S.LoginSubmitButton type="button" onClick={handleSubmitLoginForm}>Login Now</S.LoginSubmitButton>
      </S.LoginForm>
    </S.LoginContainer>
  );
};
