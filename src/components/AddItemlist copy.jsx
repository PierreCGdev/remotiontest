import AddButton from './AddButton.jsx';
import AddInput from './AddInput.jsx';

const AddItemlist = (props) => {
    return (
      <li  key={props.itemName}><span>{props.itemName}</span> 
      <AddButton btnAction={props.btnAction} btnName={props.btnName}/> </li>
    );
  };
  
  export default AddItemlist;

  