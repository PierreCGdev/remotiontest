import AddItemlist from './AddItemlist.jsx';


const CreateList = (props) => { 

    const updated = props.arrayName;
    const setUpdated = props.arrayFn;
    const message = "";

    const cleanTodo = (value) => {
        setUpdated(oldValues => {
          return oldValues.filter(updated => updated !== value)
        })
      };
    

    const validChange = (item) => {
        
        const itemKey = updated.indexOf(item)
        updated.splice(itemKey, 1, message);
        console.log(item,itemKey);
        setMessage(updated[itemKey]);
        };

    const listeUpdate = updated.map((item) => 
            <AddItemlist  itemName={item} arrayName={updated} arrayFn={setUpdated} 
            btnAction={() => cleanTodo(item)} btnAction2={() => validChange(item)}
            />);

    return (
        <ul>
            {listeUpdate}
        </ul>
    );
  };
  
  export default CreateList;