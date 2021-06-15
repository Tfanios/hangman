import classes from './SceneLetter.module.scss';
import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

const SceneLetter = (props) =>{
    const [displayState,setDisplayState] = useState(false)
    const { letters } = useSelector(state=>state.letters)
    

    useEffect(() => {
    if(letters.includes(props.letter)){
        setDisplayState(true)
    }
    if(!letters.length){
        setDisplayState(false)
    }
      }, [letters,props.letter]);
      

    return(
        <span className={classes.SceneLetter}>
            <h1 style={{margin:'0'}} className={(displayState)? classes.Shown : classes.Hidden}> 
            {props.letter}
            </h1>
        </span>
    )

}

export default SceneLetter