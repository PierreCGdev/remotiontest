type PropsType = {
  onClick:React.MouseEventHandler<HTMLButtonElement>;
  label:string;
}



function Button(props:PropsType) {
    return <button onClick={props.onClick}>{props.label}</button>;
  }
  
  export default Button;