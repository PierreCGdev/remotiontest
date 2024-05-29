type PropsType = {
  btnAction:React.MouseEventHandler<HTMLButtonElement>;
  btnName:string;
}



function AddButton(props:PropsType) {
  return (
    <button onClick={props.btnAction}>
      {props.btnName}
    </button>
  );
};

export default AddButton;