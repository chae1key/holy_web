import React from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../../elements';

const LoginBox: React.FC = () => {
    const navigate = useNavigate();

    const clickTab = (tabUrl: string) => {
        navigate(tabUrl);
    }
    return (
        <TopWrap>
            <ContWrap>Holy BOOM* 을 더 확실하게 이용하세요</ContWrap>
            <ButtonWrap>
                <Button
                    _onClick={() => {
                        clickTab(`/login`)
                    }}
                    _borderRadius='10px'
                    _width='280px'
                    _height='50px'
                    _fontSize='var(--font-lg-small)'
                    _hvBgc='none'
                    _hvColor='#666'
                >
                    Holy BOOM* 로그인
                </Button>
            </ButtonWrap>
            <ButtonWrap>
                <Button
                    _onClick={() => {
                        clickTab(`/findID`)
                    }}
                    _fontSize='var(--font-medium)'
                    _bgc="#fff"
                    _color='var(--color-main)'
                    _hvBgc='none'
                    _hvColor='#666'
                >
                    아이디
                </Button>
                <OrWrap>/</OrWrap>
                <Button
                    _onClick={() => {
                        clickTab(`/findPW`)
                    }}
                    _fontSize='var(--font-medium)'
                    _bgc="#fff"
                    _color='var(--color-main)'
                    _hvBgc='none'
                    _hvColor='#666'
                >
                    비밀번호 찾기
                </Button>
                <Button
                    _onClick={() => {
                        clickTab(`/signup`)
                    }}
                    _fontSize='var(--font-medium)'
                    _bgc="#fff"
                    _color='var(--color-main)'
                    _hvBgc='none'
                    _hvColor='#666'
                >
                    회원가입
                </Button>
            </ButtonWrap>
            <Outlet />
        </TopWrap>
    )
}

const TopWrap = styled.div`
    padding-top : 30px;
    width : 30%;
    border : solid  #e2e2e2 1px;
    border-radius : 10px;
`;

const ContWrap = styled.div`;
    color : gray;
    font-size : 14px;
    margin-left : 20px;
    padding: 0px 0px 10px 20px;
`;

const OrWrap = styled.div`
    color : #e2e2e2;
    padding : 10px 0px 0px 0px;
    font-size : 13px;
`;

const ButtonWrap = styled.div`
    display : flex;
    justify-content : center;
`;


export default LoginBox;