import React, {useState} from "react";
import styled from "styled-components";
import { Button } from "../../elements";
import BibleText from "./BibleText";


const BibleButton = () => {
    const oldTestament = ["ge","exo","lev","num","deu","josh","jdgs","ruth","1sm","2sm","1ki","2ki","1chr","2chr","ezra","neh","est","job","psa","prv","ecci","ssol","isa","jer","lam","eze","dan","hos","joel","amos","obad","jonah","mic","nahum","hab","zep","hag","zep","mal"]
    const newTestament = ["mat","mark","luke","john","acts","rom","1cor","2cor","gal","eph","phi","col","1th","2th","1tim","2tim","titus","phmn","heb","jas","1pet","2pet","1jn","2jn","3jn","jude","rev"]

    const k_oldTestament = ['창세기','출애굽기','레위기','민수기','신명기','여호수아','사사기','룻기','사무엘상','사무엘하','열왕기상','열왕기하','역대상','역대하','에스라','느헤미야','에스더','욥기','시편','잠언','전도서','아가','이사야','예레미야','예레미야애가','에스겔','다니엘','호세아','요엘','오바댜','요나','미가','나훔','하박국','스바냐','학개','스가랴','말라기']
    const k_newTestament = ['마태복음','마가복음','누가복음','요한복음','사도행전','로마서','고린도전서','고린도후서','갈라디아서','에베소서','빌립보서','골로새서','데살로니가전서','데살로니가후서','디모데전서','디모데후서','디도서','빌레몬서','히브리서','야고보서','베드로전서','베드로후서','요한일서','요한이서','요한삼서','유다서','요한계시록']
    
    const [testament, setTestament] = useState({
        type: 'old',
        array: k_oldTestament
    })
    const { type, array } = testament;
    
    const [bible, setBible] = useState('ge');
    

    // 구약/신약 버튼 클릭 시
    const [isOld, setIsOld] = useState(true);
    const changeTestament = (e) => {
        if (e.target.id === "old") {
            setTestament({
                ...testament,
                type: 'old',
                array: k_oldTestament
            });
            setIsOld(() => true);
        }
        if (e.target.id === "new") {
            setTestament({
                ...testament,
                type: 'new',
                array: k_newTestament
            });
            setIsOld(() => false);
        }
    }

    // 성경 종류 클릭 시
    const [kor_bible, setKor_bible] = useState('창세기');
    const changeBible = (e) => {
        if (type === 'old') setBible(oldTestament[e.target.id])
        if (type === 'new') setBible(newTestament[e.target.id])
        setKor_bible(()=>e.target.innerHTML);
    }
    
    

    return (
        <BibleWrap>
            <ButtonWrap>
                <Testaments>
                    <Button
                        id="old"
                        _height="30px"
                        _width="40px"
                        _borderRadius="20px 0 0 20px"
                        _bgc={isOld?"var(--color-main)":"#ddd"}
                        _hvBgc="var(--color-main)"
                        _onClick={changeTestament}
                    >구약</Button>
                    <Button
                        id="new"
                        _height="30px"
                        _width="40px"
                        _borderRadius="0 20px 20px 0"
                        _bgc={isOld?"#ddd":"var(--color-main)"}
                        _hvBgc="var(--color-main)"
                        _onClick={changeTestament}
                    >신약</Button>
                </Testaments>
                <Bibles>
                    {array.map((t, index) => (
                        <Button
                            key={index}
                            id={index}
                            _bgc="#fff"
                            _color='var(--color-main)'
                            _hvBgc='none'
                            _hvColor='#666'
                            _fontSize="15px"
                            _height="20px"
                            // className={clicked===index?'clicked':''}
                            _onClick={changeBible}
                        >{t}
                        </Button>
                    ))}
                </Bibles>
            </ButtonWrap>
            <BibleText bible = {bible} kor = {kor_bible}></BibleText>
        </BibleWrap>

    )
}
const BibleWrap = styled.div`
    display: flex;
    justify-content: center;
`
const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`
const Testaments = styled.div`
    display: flex;
    margin-bottom: 10px;    
`
const Bibles = styled.div`
    display: flex;
    flex-direction: column;
`
export default BibleButton