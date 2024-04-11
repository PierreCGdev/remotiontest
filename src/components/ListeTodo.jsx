import { useState } from 'react';

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

  const cleanTodo = value => {
    setUpdated(oldValues => {
      return oldValues.filter(updated => updated !== value)
    })
  }

  const listeUpdate = updated.map(item => 
    <li key={item}><span>{item}</span> <button onClick={() => cleanTodo(item)}>supprimer</button></li>
    );

  return (
    <div>
    <input 
        onChange={inputTodo}
        value={message} 
        />
        
    <button onClick={clickClear}>Valider</button>
        <ul>{listeUpdate}</ul>
  </div>
  );

}

export default ListeTodo

