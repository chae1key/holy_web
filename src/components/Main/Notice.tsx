import React from 'react';
import styled from 'styled-components';

const Notice: React.FC = () => {
    return(
        <TopWrap>
        <h3>공지사항</h3>
        </TopWrap>
    )
}

const TopWrap = styled.div`
    padding-top : 30px;
    width : 600px;
    border : solid  #e2e2e2 1px;
    border-radius : 10px;
`;

export default Notice;

