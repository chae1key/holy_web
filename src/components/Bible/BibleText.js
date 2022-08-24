import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import styled from "styled-components";

const BibleText = (props) => {
    let wholechpt = []; // 해당 성경의 전체 장, 전체 절
    const [chapter, setChapter] = useState([]); // 선택한 장의 절들만
    const [error, setError] = useState(null);
    const [chptNo, setChptNo] = useState({value: '1'});
    let cntChpt = '';
    const [arrChpts, setArrChpts] = useState([]);
    

    useEffect(()=>{
        const fetchbible = async() => {
            try {
                setError(null);
                const response = await axios.get(
                    `https://yesu.io/bible?lang=kor&doc=${props.bible}&start=1:1&end=1000:1000`
                );
                wholechpt = response.data;
                setChapter(wholechpt.filter(v=> v.chapter === chptNo.value));
                // setChptNo({value: '1'});
                cntChpt = wholechpt[wholechpt.length-1].chapter;
                setArrChpts(()=>Array.from({length: parseInt(cntChpt)}, (_, i) => i + 1));
                console.log(chapter)
                console.log(arrChpts)
            } catch (e) {
                setError(e); 
            }
        }
        fetchbible();
    }, [props.bible, chptNo]);
    
    const mounted = useRef(false);
    useEffect(()=>{
        function changeChptNo() {
            setChptNo({value: '1'})
        }
        if (!mounted.current) {
            mounted.current = true;
          } else {
            changeChptNo();
          }
    }, [props.bible])
    if (error) return <div>에러 발생</div>
    if (!wholechpt) return null;
    
    
    
    function onClickChapter(e) {
        setChptNo({value: e.target.value})
        console.log(chptNo)
        // setChapter(wholechpt.filter(v=> v.chapter === e.target.innerHTML));
        // console.log(chapter)
    }

    
    const text = chapter.map(v=> (
        <div key={v.verse}>
            <span style={{
                fontSize: "5px",
                marginRight: "5px",
                color: "var(--color-main)",
                fontWeight: "900"
            }}>{v.verse}</span>
            {v.message}
        </div>
    ))

    return (
        <BibleWrap>
            <SelectWrap>
                <Chapters 
                    onChange={onClickChapter}
                    value={chptNo.value}
                >
                    {arrChpts.map(no=>(
                        <ChapterNo 
                            key={no.toString()}
                            value={no}
                        >
                        {no} 장
                        </ChapterNo>
                    ))}
                </Chapters>
                <Title>{props.kor}</Title>
            </SelectWrap>
            
            <TextWrap>
                    {text}
            </TextWrap>
        </BibleWrap>

    )
}
const BibleWrap = styled.div`
    display: flex;
`
const TextWrap = styled.div`
    width: 100%;
    height: 1000px;
    border: 1px solid var(--color-main);
    border-radius: 0 20px 20px 0;
    padding: 20px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        width: 50%;
        height: 17%;
        background-color: rgba(0,0,0,0.1);
        border-radius: 10px;  
        margin: 10px 0;
    }
    ::-webkit-scrollbar-track{
        margin: 20px;
    }
`
const Chapters = styled.select`
    border: 1px solid var(--color-main);
    border-right: none;
    border-radius: 20px 0 0 20px;
    height: 20%;
    color: #fff;
    font-weight: 900;
    font-size: 20px;
    background-color: var(--color-main);
    padding: 5px;
`
const ChapterNo = styled.option`
    text-align: center;
`
const Title = styled.div`
    border: 1px solid var(--color-main);
    border-right: none;
    border-radius: 20px 0 0 20px;
    writing-mode: vertical-rl;
    padding: 20px 10px;
    font-size: 20px;
    color: var(--color-main);
    font-weight: 900;
`
const SelectWrap = styled.div`
    height: 270px;
    display: flex;
    flex-direction: column;
`
export default BibleText