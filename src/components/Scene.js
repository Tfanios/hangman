
import { useSelector } from 'react-redux'
import Svgs from './Svgs'
import SceneLetter from './SceneLetter'
import classes from './Scene.module.scss'

const Scene = () => { 
    const { tries } = useSelector(state=>state.tries)
    const { word } = useSelector(state=>state.word)

    if(tries === 0){
        window.alert("You lost! Try again");
    }
    return(
        <div style={{flex:'3'}}> 
            <div>
                <Svgs tries={tries}/>
            </div>
            <div className={classes.Scene}>
                {[...word].map((letter,index) => <SceneLetter  letter={letter} key={index} />)}
            </div>
        </div>
    )
}

export default Scene