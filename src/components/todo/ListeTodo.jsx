import { useState } from 'react';
import AddButton from './AddButton.jsx';
import AddInput from './AddInput.jsx';
import CreateList from './CreateList.jsx';

function ListeTodo() {

  const [message, setMessage] = useState();
  const [updated, setUpdated] = useState([]);

  const inputTodo = (event) => {
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

