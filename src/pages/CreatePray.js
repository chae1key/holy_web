import React from 'react';
import styled from 'styled-components';
import { Button } from '../elements';

function CreatePray() {
    return (
        <ArticleWrap>
            <h3>매일 주님께 기도합시다</h3>
            
            <ArticleForm action="/dd" method="post">
                <InputTitle name="prayTitle" placeholder="기도 제목을 입력하세요."></InputTitle>
                
                    <InputContext name="prayContext"></InputContext>
                
                {/* <input type="submit"></input> */}
                <Button>작성완료</Button>
            </ArticleForm>
            
        </ArticleWrap>
    )
}
const ArticleWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ArticleForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const InputTitle = styled.input`
    margin: 20px 0;
    height: 50px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #ddd;
    ::placeholder,
    ::-webkit-input-placeholder {
      font-size: 15px;
      padding-left: 20px;
    }
`;
const InputContext = styled.textarea`
    margin: 20px 0;
    height: 500px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #ddd;
    padding: 20px;
`
export default CreatePray;