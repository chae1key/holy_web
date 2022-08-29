import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as bibleActions } from '../redux/modules/bible';
import styled from 'styled-components';
import { TestamentCard } from '../components';

/* 
scroll
wrong <- red, cannot next
input <- paste x
*/
const TongdokPage: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      }, [])

    return(<TestamentCard name={'ge'}/>)
}

export default TongdokPage;