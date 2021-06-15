import React from 'react';
import {useSelector} from 'react-redux'

const UsedLetters = () =>{
    const { letters } = useSelector(state=>state.letters)
    return(
        <div style={{flex:'1'}}>
            <h2>The letters you have used  are:</h2>
            <h2>{letters}</h2>
        </div>
    )
}

export default UsedLetters