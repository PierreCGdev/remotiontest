type PropsType{
inputAction:React.ChangeEventHandler<HTMLInputElement>;
InputMessage:string;
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