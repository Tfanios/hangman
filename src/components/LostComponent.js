import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { newFetchedWord,newGame,resetLetters,resetKeyboard } from '../actions/actions'
import classes from './LostComponent.module.scss'


const LostComponent = () =>{
    const dispatch = useDispatch()
    const { word } = useSelector(state=>state.word)

    //NEW GAME //
    const clickHandler = () =>{
        dispatch(resetLetters())
        dispatch(newFetchedWord())
        dispatch(newGame())
        dispatch(resetKeyboard(true))
    }
    return(
        <div>
            <h1>You Lost!</h1>
            <button className={classes.Button} onClick={clickHandler}>New Game</button>
            <p>The word was {word}</p>
            <p>Better luck next time!</p>
        </div>
    )

}

export default LostComponent