type PropsType = {
  proposition:string;
  onChange:React.ChangeEventHandler<HTMLInputElement>;
  reponse:string;
}


function addRadial(props:PropsType) {



    return  (
    <div key={props.reponse}>
      <input  type='radio' name={props.proposition} onChange={props.onChange} value={props.reponse} ></input>
      <label htmlFor="radio-button">{props.reponse}</label>
    </div>
)
  }
  
  export default addRadial;