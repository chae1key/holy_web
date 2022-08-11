import React from 'react';
import styled from 'styled-components';

const HallOfFame: React.FC = () => {
    return(
        <TopWrap>
        <h3>~명예의 전당~</h3>
        </TopWrap>
    )
}

const TopWrap = styled.div`
    padding-top : 30px;
    width : 600px;
    border : solid  #e2e2e2 1px;
    border-radius : 10px;
`;

export default HallOfFame;

