//import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Input } from '../elements';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const changePwd = (e: ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  }

  const clickLogin = async (loginId: string) => {
    window.alert("로그인 되었습니다.")
  }

  return (
    <LoginWrap>
      <LeftWrap>
        <Logo onClick={() => {
          navigate('/');
        }}>Holy BOOM*</Logo>
      </LeftWrap>
      <RightWrap>
        <LoginTitle>로그인</LoginTitle>
        <InputWrap>
          <InputTitle>아이디</InputTitle>
          <Input 
            _padding='0px 4px'
            _value={email} 
            _onChange={changeEmail} 
            _width="100%"
            _height="40px"
            _placeholder="이메일을 입력하세요"
          />
        </InputWrap>
        <InputWrap>
          <InputTitle>패스워드</InputTitle>
          <Input 
            _padding='0px 4px'
            _type="password" 
            _value={pwd} 
            _onChange={changePwd} 
            _width="100%"
            _height="40px"
            _placeholder="패스워드를 입력하세요"
          />
        </InputWrap>
        <Button
          _onClick={()=> {
            clickLogin(email);
          }}
          _width="65%"
          _height="40px"
        >
          로그인
        </Button>
      </RightWrap>
    </LoginWrap>
  );
};

const LoginWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 880px;
  height: 600px;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 5px;
  transform: translate(-50%, -50%);
`;

const LoginTitle = styled.h1`
  margin-bottom: 20px;
  font-size: var(--font-title);
`;

const LeftWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;

const Logo = styled.h1`
  cursor: pointer;
`;

const RightWrap = styled.div`
  padding: 120px 40px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RadioWrap = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LoginRadioLabel = styled.label`
  font-size: var(--font-sm-large);
  font-weight: 500;
`;

const InputWrap = styled.div`
  margin-bottom: 16px;
  width: 65%;
`;

const InputTitle = styled.p`
  margin-bottom: 4px;
  font-size: var(--font-main);
`;

export default Login;