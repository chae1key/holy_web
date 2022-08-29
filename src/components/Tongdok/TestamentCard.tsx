import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { bibleInfo } from '../../shared/bibleInfo'

interface TestamentCardProps {
    name: string;
}

const TestamentCard: React.FC<TestamentCardProps> = ({ name }) => {

    const navigate = useNavigate()
    const clickCard = () => {
        navigate(`/tongdok/${name}`);
    }

    // 통독 현황 추가필
    return (
        <TopWrap onClick={clickCard}>
            <WordWrap>{bibleInfo[name].kor}</WordWrap>
        </TopWrap>
    )
}

const TopWrap = styled.div`
    display: flex;
    padding : 15px 5px 15px 5px;
    width : 100px;
    border : solid  #e2e2e2 1px;
    border-radius : 10px;
    justify-content: center;
    align-items: center;
`;
const WordWrap = styled.div`
    display : flex;
    font-size: var(--font-lg-small);
    font-weight: 800;
`;

export default TestamentCard;

