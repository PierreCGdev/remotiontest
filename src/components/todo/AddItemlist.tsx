import { useState } from 'react';
import AddButton from './AddButton';
import AddInput from './AddInput';

type PropsType = {
  item:string;
  btnActionmodif:React.ChangeEventHandler<HTMLInputElement>;
  btnActionremove:React.ChangeEventHandler<HTMLInputElement>;
  }



function AddItemlist(props:PropsType) {
  const [message, setMessage] = useState<string>(props.item);
  
  const inputTodo = (event:React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

    return (
      <li>
      <span>{props.item}</span>
      <AddInput inputAction={inputTodo} InputMessage={message}/>
      <AddButton btnAction={() => props.btnActionmodif(props.item, message)} btnName={'valider la modification'}/>
      <AddButton btnAction={() => props.btnActionremove(props.item)} btnName={'supprimer'}/> </li>
    );
  };
  
  export default AddItemlist;


