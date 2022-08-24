import React from 'react';
import styled from 'styled-components';

const Search: React.FC = () => {
    return(
        <TopWrap>
        <TitleWrap>구절 검색</TitleWrap>
        </TopWrap>
    )
}

const TopWrap = styled.div`
    width : 70%;
    border : solid  #e2e2e2 1px;
    border-radius : 10px;
`;
const TitleWrap = styled.div`
    padding: 20px;
    font-size: 20px;
    font-weight: 700;    
`

export default Search;

