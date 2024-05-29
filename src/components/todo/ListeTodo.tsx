import { useState } from 'react';
import AddButton from './AddButton';
import AddInput from './AddInput';
import CreateList from './CreateList';

function ListeTodo() {

  const [message, setMessage] = useState<string>("");
  const [updated, setUpdated] = useState<string[]>([""]); // il fallait lui préciser le type d'array avec ""

  const inputTodo = (event:React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const clickClear = () => {
    setUpdated(prevItems => prevItems.concat(message));
    setMessage("");
  };
    
  return (
    <div>
    <AddInput 
    inputAction={inputTodo} 
    InputMessage={message}/>
    <AddButton 
    btnAction={clickClear} 
    btnName={'valider'}/>
    <CreateList 
    arrayName={updated} 
    arrayFn={setUpdated} />
    </div>
    );

}

export default ListeTodo

