import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../elements';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const changeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  }

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const changePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  }

  const clickSignUp = async (email: string, name: string) => {
    window.alert('회원가입이 완료되었습니다.')
    navigate('/')
  }

  return (
    <SignUpWrap>
      <LeftWrap>
        <Logo onClick={() => {
          navigate('/');
        }}>Holy BOOM*</Logo>
      </LeftWrap>
      <RightWrap>
        <SignUpTitle>회원가입</SignUpTitle>
        <InputWrap>
          <InputTitle>별명</InputTitle>
          <Input
            _value={nickname}
            _onChange={changeNickname}
            _placeholder="별명을 입력하세요"
            _width="100%"
            _height="40px"
          />
        </InputWrap>
        <InputWrap>
          <InputTitle>이메일</InputTitle>
          <Input
            _value={email}
            _onChange={changeEmail}
            _placeholder="이메일을 입력하세요"
            _width="100%"
            _height="40px"
          />
        </InputWrap>
        <InputWrap>
          <InputTitle>패스워드</InputTitle>
          <Input
            _type="password"
            _value={pwd}
            _onChange={changePwd}
            _placeholder="패스워드를 입력하세요"
            _width="100%"
            _height="40px"
          />
        </InputWrap>
        <Button
          _onClick={() => {
            clickSignUp(email, nickname);
          }}
          _width="65%"
          _height="40px"
        >
          회원가입
        </Button>
      </RightWrap>
    </SignUpWrap>
  );
};

const SignUpWrap = styled.div`
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

const SignUpTitle = styled.h1`
  margin-bottom: 20px;
  font-size: var(--font-title);
`;

const LeftWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center ;
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

const InputWrap = styled.div`
  margin-bottom: 16px;
  width: 65%;
`;

const InputTitle = styled.p`
  font-size: var(--font-main);
`;

export default SignUp;