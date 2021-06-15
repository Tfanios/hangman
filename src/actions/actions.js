import axios from 'axios'


export const newFetchedWord = () => async(dispatch)=>{
    try {
        let { data }   =  await axios.get('https://random-word-api.herokuapp.com//word?number=1')
        dispatch({ type: "NEW_WORD", payload: data[0].toUpperCase() });
       } catch (error) {
        console.log(error)
       } 
}

export const newFail = () => dispatch =>{
    try {
        dispatch({ type: "NEW_TRY"});
       } catch (error) {
        console.log(error)
       } 
}

export const newGame = () => dispatch =>{
    try {
        dispatch({type:"NEW_GAME"});
    }catch(error){
        console.log(error)
    }
}

export const usedLetters = (letter) => dispatch =>{
    try {
        dispatch({ type: "LETTER_USED",payload:letter});
       } catch (error) {
        console.log(error)
       } 
}

export const resetLetters = () => dispatch =>{
    try {
        dispatch({ type: "LETTER_RESET"})
    } catch (error) {
        console.log(error)
    }
}
export const resetKeyboard = (bool) => dispatch =>{
    try{
        dispatch({ type: "RESET_KEYS",payload:bool})
    }catch (error) {
        console.log(error)
    }
}
