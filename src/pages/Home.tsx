import React, { useEffect } from 'react';
import styled from 'styled-components';
import { LoginBox, Poster, HallOfFame, Search } from '../components';


const sampleCont = "그런즉 믿음, 소망, 사랑. 그 중에 제일은 사랑이라"
const sampleFrom = "고린도전서 13:13"

const Home: React.FC = () => {

    return (
        <div>
            <TopWrap>
                <Poster todaysWordCont={sampleCont} todaysWordFrom={sampleFrom} />
                <LoginBox />
            </TopWrap>
            <MiddleWrap>
                <Search />
                <HallOfFame />
            </MiddleWrap>
        </div>
    )
}
const TopWrap = styled.div`
    display : flex;
    gap : 10px;
    margin-top : 10px;
`
const MiddleWrap = styled.div`
    display : flex;
    height:400px;
    gap : 10px;
    margin-top : 10px;
`
export default Home;