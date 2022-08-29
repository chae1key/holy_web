import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import produce from 'immer'
import { Dispatch } from "redux";
import { BibleType } from "../../types/bibles";

interface initialType {
    verseList: BibleType[],
}

// actions
const GET_VERSES = "GET_VERSES";

// action creators
const getVerses = createAction(GET_VERSES, (verseList: BibleType[]) => ({ verseList }));


// initialState
const initialState: initialType = {
    verseList: [],
}

// middlewares
const getVersesAPI = (title:string,startCh : number, startVers :number, endCh:number , endVers : number) => {
    return async function (dispatch: Dispatch) {
      try {
        let response = await axios.get(`https://yesu.io/bible?lang=kor&doc=${title}&start=${startCh}:${startVers}&end=${endCh}:${endVers}`);
        console.log("response",response.data)
        dispatch(getVerses(response.data));
      } catch (err) {
        console.log(err);
      }
    }
  }

  // reducer
  export default handleActions({
    [GET_VERSES]: (state, action) => produce(state, (draft) => {
      draft.verseList.push(...action.payload.verseList);
  
      draft.verseList = draft.verseList.reduce((acc: BibleType[], cur) => {
        if (acc.findIndex(a => a.verse === cur.verse ) === -1) {
          return [...acc, cur];
        } else {
          acc[acc.findIndex(a =>  a.verse === cur.verse)] = cur;
          return acc;
        }
      }, []);
    }),
  }, initialState);

  const actionCreators = {
    getVerses,
    getVersesAPI
  };

    export { actionCreators };