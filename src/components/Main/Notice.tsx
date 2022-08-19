// 이 부분은 성경읽기로 하기로 했었는데 아직 어떤 식으로 구성될지 미확정 -- 확정 후에 파일 이름 등 바꿀 예정 !!

import React from 'react';
import styled from 'styled-components';

const Notice: React.FC = () => {
    return(
        <TopWrap>
        <TitleWrap>성경읽기</TitleWrap>
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

export default Notice;

