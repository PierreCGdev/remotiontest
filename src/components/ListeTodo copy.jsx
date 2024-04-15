import { useState } from 'react';
import AddButton from './AddButton.jsx';
import AddItemlist from './AddItemlist.jsx';
import AddInput from './AddInput.jsx';


function ListeTodo() {

  const [message, setMessage] = useState();
  const [updated, setUpdated] = useState([]);

  const inputTodo = (event) => {
    setMessage(event.target.value);
  };

  const clickClear = () => {
    updated.push(message);
    setMessage("");
  };

  const cleanTodo = (value) => {
    setUpdated(oldValues => {
      return oldValues.filter(updated => updated !== value)
    })
  }

  const listeUpdate = updated.map(item => 
    <AddItemlist itemName={item} btnName="supprimer" btnAction={() => cleanTodo(item)}/>);
    
  return (
    <div>
    <AddInput inputAction={inputTodo} InputMessage={message}/>
    <AddButton btnAction={clickClear} btnName="valider"/>

     <ul>{listeUpdate}</ul>
  </div>
  );

}

export default ListeTodo

