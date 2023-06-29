import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../elements';
import { Table_PrayBoard } from '../elements';
import { article_info } from '../pray_data/article_info.js';


const PrayBoard = () => {
    const navigate = useNavigate();

    const clickTab = (tabUrl) => {
        navigate(tabUrl);
    }

    return (
        <BoardWrap>
            <Table_PrayBoard data={article_info}></Table_PrayBoard>
            <ButtonWrap>
                <Button
                    _onClick={() => {
                        clickTab('/createPray')
                    }}
                    _margin='20px 0 0 0'
                    _width='100px'
                    _height='40px'
                >
                    기도 작성하기
                </Button>
            </ButtonWrap>
        </BoardWrap>
    )
}

const BoardWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ButtonWrap = styled.div`
    width: 80%;
    display: flex;
    justify-content: right;
`

export default PrayBoard;