import React, { ChangeEvent,useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as bibleActions } from '../../redux/modules/bible';
import { useParams } from 'react-router';
import styled from 'styled-components';
import {BibleType} from '../../types/bibles';
import { Input } from '../../elements';
/* 

wrong <- red, cannot next
input <- paste x
*/

interface VerseProps {
    data : BibleType;
}

const VerseAndInput: React.FC<VerseProps> = ({ data }) => {
    const [input, setInput] = useState<string>('');

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('changeInput 실행됨~!')
        setInput(e.target.value)
        return
      }

    return(<TopContainer>
        <VerseWrap>{data.message}</VerseWrap>
        <Input 
        _value={input} 
        _padding="3px"
        _fontSize='var(--font-lg-small)'
        _width='100%'
        _height='30px'
        _onChange={changeInput}/>
    </TopContainer>)
}

const TopContainer = styled.div`
  margin : 10px;
`
const VerseWrap = styled.div`
  padding : 6px;
  font-size: var(--font-lg-small);
  font-weight: 600;
  color: #000;
`
export default VerseAndInput;