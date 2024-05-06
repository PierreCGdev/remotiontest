function Final(props) {
    <div>
    <TitleH3 title={props.title}/> 
    <p>votre score est de {props.score}/{props.total}</p>
    <Button onClick={props.onClick} label={props.label}/>
    </div>
  }
  
  export default Final;