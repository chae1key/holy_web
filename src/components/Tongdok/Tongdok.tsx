import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as bibleActions } from '../../redux/modules/bible';
import { useParams } from 'react-router';
import styled from 'styled-components';
import VerseAndInput from './VerseAndInput';
import { BibleType } from '../../types/bibles';

/* 
scroll
wrong <- red, cannot next
input <- paste x
*/
const Tongdok: React.FC = () => {
    const dispatch = useDispatch();
    const testamentName = useParams();

    const verses = useSelector((state: any) => state.bible.verseList);
    useEffect(() => {
        dispatch<any>(bibleActions.getVersesAPI(testamentName.name!,1,1,1,200));
      }, [])

    // useEffect(()=>{
    //  console.log("verses는요~",verses)   
    // }, [verses])
    return(<TopContainer>
        {
            verses &&
            verses.map((data: BibleType, i:number) => {
                return(
                    <VerseAndInput data={data} key = {i}/>
                )
            })
        }
    </TopContainer>)
}

const TopContainer = styled.div`
    overflow : scroll;
`
export default Tongdok;