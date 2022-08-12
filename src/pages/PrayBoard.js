import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../elements';

const PrayBoard = () => {
    const navigate = useNavigate();

    const clickTab = (tabUrl) => {
        navigate(tabUrl);
    }

    return (
        <div>
            <Button
                _onClick={() => {
                    clickTab('/createPray')
                }}
                _borderRadius = '20px'
                _width='150px'
                _height='50px'
                _fontSize='var(--font-lg-small)'
                _hvBgc='none'
                _hvColor='#666'
            >
                기도 작성하기
            </Button>
        </div>
    )
}

export default PrayBoard;