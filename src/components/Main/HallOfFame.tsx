import React from 'react';
import styled from 'styled-components';
import { Table_HallOfFame } from '../../elements';
import ranking from '../../hallOfFame_data/ranking';

const HallOfFame: React.FC = () => {
    return(
        <TopWrap>
        <TitleWrap>명예의 전당</TitleWrap>
        <ContentWrap>
            <Table_HallOfFame data={ranking}></Table_HallOfFame>
        </ContentWrap>

        </TopWrap>
    )
}

const TopWrap = styled.div`
    width : 30%;
    border : solid  #e2e2e2 1px;
    border-radius : 10px;
`;
const TitleWrap = styled.div`
    padding: 20px;
    font-size: 20px;
    font-weight: 700;
`
const ContentWrap = styled.div`
    display: flex;
    justify-content: center
`
export default HallOfFame;

