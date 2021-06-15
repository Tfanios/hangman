import React from 'react';
import Button from './Button'

const Keyboard = () =>{
    const letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
    return(
        <div style={{   
            display:'flex',alignContent:'space-between',flexWrap:'wrap',marginTop:'10px',height:'150px',width:'40%',justifyContent:'center'
            }}>
            {letters.map((letter,index)=><Button key={index} letter={letter.toUpperCase()}/>)}
        </div>
    )
}

export default Keyboard