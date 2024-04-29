function AddInput(props) {
    return (
        <input 
        onChange={props.inputAction}
        value={props.InputMessage} 
        />
    );
  };
  
  export default AddInput;