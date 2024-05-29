import { useState } from 'react';
import AddButton from './AddButton';
import AddInput from './AddInput';
import CreateList from './CreateList';

function ListeTodo() {

  const [message, setMessage] = useState();
  const [updated, setUpdated] = useState([]);

  const inputTodo = (event:React.ChangeEvent<HTMLButtonElement>) => {
    setMessage(event.target.value);
  };

  const clickClear = () => {
    setUpdated(prevItems => prevItems.concat(message));
    setMessage("");
  };
    
  return (
    <div>
    <AddInput inputAction={inputTodo} InputMessage={message}/>
    <AddButton btnAction={clickClear} btnName={'valider'}/>
    <CreateList arrayName={updated} arrayFn = {setUpdated} />
    </div>
    );

}

export default ListeTodo

