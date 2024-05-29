type PropsType = {
InputMessage:string;
inputAction:React.ChangeEventHandler<HTMLInputElement>;
}


function AddInput(props:PropsType) {
    return (
        <input 
        onChange={props.inputAction}
        value={props.InputMessage} 
        />
    );
  };
  
  export default AddInput;