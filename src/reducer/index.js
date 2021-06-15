import { combineReducers } from 'redux'




const newFetchedWordReducer = (state ={word:[]} , action) =>{
    switch (action.type){
        case 'NEW_WORD': return {word:action.payload}
        default:return {...state}
    }

}
const numberOfTriesReducer = (state ={tries:6} , action) =>{
    switch (action.type){
        case 'NEW_TRY': return {tries:state.tries-1 }
        case 'NEW_GAME': return {tries:6}
        default:return {...state}
    }

}
const usedLettersReducer = (state={letters:[]}, action) => {
    switch (action.type){
        case 'LETTER_USED': return{letters:[...state.letters,action.payload]}
        case 'LETTER_RESET': return{letters:[]}
        default: return {...state}
    }
}

const keyboardReducer = (state={keysState:false},action) =>{
    switch(action.type){
        case 'RESET_KEYS': return{ ...state, keysState:action.payload };
        default: return {...state}
    }
}

export default combineReducers({ word:newFetchedWordReducer, tries:numberOfTriesReducer,letters:usedLettersReducer,keys:keyboardReducer })