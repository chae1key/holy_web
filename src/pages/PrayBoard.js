import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../elements';
import { Table } from '../elements';
import { article_info } from './pray_data/article_info.js';


const PrayBoard = () => {
    const navigate = useNavigate();

    const clickTab = (tabUrl) => {
        navigate(tabUrl);
    }

    return (
        <BoardWrap>
            <Table data={article_info}></Table>
            <Button
                _onClick={() => {
                    clickTab('/createPray')
                }}
                _margin='20px'
                _width='10%'
                
            >
                기도 작성하기
            </Button>
            
        </BoardWrap>
    )
}

const BoardWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default PrayBoard;