
function AddButton(props) {
  return (
    <button onClick={props.btnAction}>
      {props.btnName}
    </button>
  );
};

export default AddButton;