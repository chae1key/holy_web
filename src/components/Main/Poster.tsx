import React from 'react';
import styled from 'styled-components';
import { BiBible } from 'react-icons/bi'

interface PosterProps {
    todaysWordCont: string,
    todaysWordFrom: string
};

const Poster: React.FC<PosterProps> = ({ todaysWordCont, todaysWordFrom }) => {
    return (
        <TopWrap>
            <TitleWrap>
            <BiBible className="icon" size="25" />
                <h2 style={{"paddingLeft":"5px"}}>오늘의 말씀</h2>
            </TitleWrap>
            <ContWrap> {todaysWordCont} </ContWrap>
            <FromWrap> {todaysWordFrom} </FromWrap>
        </TopWrap>
    )
}

const TopWrap = styled.div`
    width : 800px;
    border : solid #e2e2e2 1px;
    border-radius : 10px;
    justify-content : center;
`;
const TitleWrap = styled.div`
    display :flex;
    margin : 10px 0px 10px 20px;
    padding : 10px;
`;
const ContWrap = styled.div`
    font-size : 20px;
    text-align: center;
    margin : 10px;
    padding : 10px 18px 0px 18px;
`;
const FromWrap = styled.div`
    text-align: right;
    margin : 20px;
    padding : 10px;
`;
export default Poster;