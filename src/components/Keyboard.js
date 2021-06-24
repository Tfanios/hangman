import React from 'react';
import Button from './Button'
import classes from './Keyboard.module.scss'

const Keyboard = () =>{
    const letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
    return(
        <div className={classes.Keyboard}>
            {letters.map((letter,index)=><Button key={index} letter={letter.toUpperCase()}/>)}
        </div>
    )
}

export default Keyboard