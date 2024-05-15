import { useState } from 'react';
import Screen from './Screen';
import data from './data';
import ListRadial from './ListRadial';


function Quizz() {
    const [score, setScore] = useState(0);
    const [reponse, setReponse] = useState('');
    const [current, setCurrent] = useState(0);

       const radialChoice = (event:React.ChangeEvent<HTMLInputElement>) => {
        setReponse(event.target.value);  
      };

      const buttonNext = () => {
        checkReponse();
        setCurrent(current +1);
      };

      const checkReponse = () => {
        if(reponse === data[current].valide){
        setScore(score +1); 
        }
      }

      const reset = () => {
        setCurrent(0)
        setScore(0)
      }


      const screenChoice = () => {
        if((current + 1) >  data.length){
        return <Screen 
        TitleH3={"c'est fini"} 
        content={<p>votre score est de {score}/{data.length}</p>} 
        onClick={reset} 
        label={"recommencer"}
        />;
        }
        return <Screen 
        TitleH3={data[current].question} 
        content={<ListRadial current={current} onChange={radialChoice}/>} 
        onClick={buttonNext} 
        label={'Suivant'}
        />;
      }

  return (
    <div>
        {screenChoice()}
    </div>
    );
}

export default Quizz