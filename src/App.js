import './App.css';
import Keyboard from './components/Keyboard'
import Scene from './components/Scene'
import React from 'react'
import { useSelector } from 'react-redux'
import Tries from './components/Tries'
import UsedLetters from './components/UsedLetters'
import LostComponent from './components/LostComponent'


const App = () => {
  const { tries } = useSelector(state=>state.tries)

  return (
    <div className="App">
      {tries>0?
      <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent: 'space-evenly',width:'100%'}}>
          <Tries />
          <Scene />
          <UsedLetters /> 
        </div>
        <div style={{display:'flex',justifyContent: 'center',alignItems: 'center',marginTop:'3%'}}>
          <Keyboard />  
        </div>
      </div> 
      :
      <LostComponent />}
      
    </div>
  );
}

export default App;
