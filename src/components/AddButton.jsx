
const AddButton = (btnName,btnAction) => {
  return (
    <button onClick={btnAction}>
      {btnName}
    </button>
  );
};

export default AddButton;