import React,{ useState,useEffect } from 'react';
import classes from './Button.module.scss'
import { useSelector,useDispatch } from 'react-redux'
import { newFail,usedLetters } from '../actions/actions'

const Button = (props) =>{
    const [disabled,setDisabled] = useState(false)
    const dispatch = useDispatch()
    const stateWord = useSelector(state=>state.word)
    const resetState = useSelector(state=>state.keys.keysState)
    const { word } = stateWord
    
    const clickHandler = () =>{
        dispatch(usedLetters(props.letter))
        let existInWord = 0;
        
        for(let i=0;i<word.length;i++){
            if(word[i] === props.letter ){
            existInWord = 1;
            break
        }else{
            existInWord = 0;
        }}
        if(existInWord === 0){
            dispatch(newFail())
        }
        setDisabled(true)
    }
    // RESETS DISABLED BUTTONS//
    useEffect(() => {
        if(resetState === true){
            setDisabled(false)
        }
    }, [resetState]);    
    return(
        <button
        disabled={disabled} 
        className={(props.letter !== 'Z')? classes.Button : `${classes.Button} ${classes.ZLetter}` }
        onClick={clickHandler}
        >{props.letter}
        </button>
    )
}

export default Button