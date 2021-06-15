import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { newFetchedWord,newGame,resetLetters,resetKeyboard } from '../actions/actions'
import classes from './Tries.module.scss'

const Tries = () =>{
    const { tries } = useSelector(state=>state.tries)
    const dispatch = useDispatch()

    //NEW GAME //
    const clickHandler = () =>{
        dispatch(resetLetters())
        dispatch(newFetchedWord())
        dispatch(newGame())
        dispatch(resetKeyboard(true))
    }
    //RESETS DISABLED //
    useEffect(()=>{
        if(tries === 6){
            dispatch(resetKeyboard(false))
        }
    },[tries])
    
    return(
        <div style={{flex:'1'}}>
            <h2>Your number of tries are:</h2>
            <h2>{tries}</h2>
            <button className={classes.Button} onClick={clickHandler}>New Game</button>
        </div>
    )

}

export default Tries