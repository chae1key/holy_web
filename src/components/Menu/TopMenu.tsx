import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../elements';
import logo_img from '../../logo.png';

const TopMenu: React.FC = () => {

    const navigate = useNavigate();

    const clickTab = (tabUrl: string) => {
        navigate(tabUrl);
    }

    return (
        <TopMenuWrap>
            <MenuWrap>
                <MenuLogo onClick={() => {
                    clickTab('/');
                }}><img 
                    src={logo_img}
                    width='230px'
                    /></MenuLogo>
                <div>
                    <Button
                        _margin="0px 12px"
                        _onClick={() => {
                            clickTab('/prayBoard')
                        }}
                        _fontSize='var(--font-lg-small)'
                        _bgc="#fff"
                        _color='var(--color-main)'
                        _hvBgc='none'
                        _hvColor='#666'
                    >
                        기도게시판
                    </Button>
                    <Button
                        _onClick={() => {
                            clickTab(`/tongdok`)
                        }}
                        _fontSize='var(--font-lg-small)'
                        _bgc="#fff"
                        _color='var(--color-main)'
                        _hvBgc='none'
                        _hvColor='#666'
                    >
                        성경 통독
                    </Button>
                    <Button
                        _onClick={() => {
                            clickTab(`/readBible`)
                        }}
                        _fontSize='var(--font-lg-small)'
                        _bgc="#fff"
                        _color='var(--color-main)'
                        _hvBgc='none'
                        _hvColor='#666'
                    >
                        성경 읽기
                    </Button>
                </div>
            </MenuWrap>
            <Outlet />
        </TopMenuWrap>
    );
};

const TopMenuWrap = styled.div`
  width: 1140px;
`;

const MenuWrap = styled.div`
  position: sticky;
  top: 0px;
  margin-bottom: 20px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  z-index: 10000;
`;

const ButtonWrap = styled.div`
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content : default;
`;


const MenuLogo = styled.h1`
  margin-left: 32px;
  font-size: var(--font-title);
  cursor: pointer;
`;

export default TopMenu;
