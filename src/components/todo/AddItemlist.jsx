import { useState } from 'react';
import AddButton from './AddButton.jsx';
import AddInput from './AddInput.jsx';

const AddItemlist = (props) => {
  const [message, setMessage] = useState("");
  
  const inputTodo = (event) => {
    setMessage(event.target.value);
  };

    return (
      <li>
      <span>{props.itemName}</span>
      <AddInput inputAction={inputTodo} InputMessage={message}/>
      <AddButton btnAction={props.btnAction2} btnName="valider la modification"/>
      <AddButton btnAction={props.btnAction} btnName="supprimer"/> </li>
    );
  };
  
  export default AddItemlist;


