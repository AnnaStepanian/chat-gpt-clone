import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 45px;
`;

export const LoginTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 23px;
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #555555;
  }
`;

export const LoginInput = styled.input`
  width: 410px;
  padding: 13px 19px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #555555;
  background: #f1f3f6;
  outline: none;
  border: none;
  border-radius: 8px;
`;

export const LoginSubmitButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
  background: #fd7401;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  box-shadow: 0 8px 12px 0 #fd74014d;
  text-align: center;
  padding: 13px 0;
  margin-top: 34px;
  cursor: pointer;

  &:hover {
    background: #dd6501;
  }
`;
