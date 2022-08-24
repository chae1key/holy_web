import React from 'react'
// import { BibleBox } from '../components';
import { BibleButton } from '../components';
import styled from 'styled-components';

function ReadBible() {
    
    return (
        <Wrap>
            <BibleWrap>
                <BibleButton></BibleButton>
            </BibleWrap>
        </Wrap>
    )
}
const Wrap = styled.div`
    display: flex;
    justify-content: center
`
const BibleWrap = styled.div`
    width: 90%;
    display: flex;
`

export default ReadBible;