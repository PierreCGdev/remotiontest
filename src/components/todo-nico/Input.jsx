function Input(props) {
  return (
    <input
      onChange={props.onChange}
      value={props.value} />
  );
}

export default Input;