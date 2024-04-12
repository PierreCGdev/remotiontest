import AddButton from './AddButton.jsx';

const AddItemlist = (itemName,btnName,btnAction) => {
    return (
      <li  key={itemName}><span>{itemName}</span> {AddButton(btnName,btnAction)} </li>
    );
  };
  
  export default AddItemlist;