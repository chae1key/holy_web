import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../../elements';

const LoginBox: React.FC = () => {
    const navigate = useNavigate();

    const clickTab = (tabUrl: string) => {
        navigate(tabUrl);
    }
    return (
        <div>
            <ButtonWrap>
                <Button
                    _onClick={() => {
                        clickTab(`/login`)
                    }}
                    _borderRadius = '20px'
                    _width='150px'
                    _height='50px'
                    _fontSize='var(--font-lg-small)'
                    _hvBgc='none'
                    _hvColor='#666'
                >
                    로그인
                </Button>
                <Button
                    _onClick={() => {
                        clickTab(`/signup`)
                    }}
                    _fontSize='var(--font-lg-small)'
                    _bgc="#fff"
                    _color='var(--color-main)'
                    _hvBgc='none'
                    _hvColor='#666'
                >
                    회원가입
                </Button>
            </ButtonWrap>
            <Outlet />
        </div>
    )
}
const ButtonWrap = styled.div`
`;


export default LoginBox;