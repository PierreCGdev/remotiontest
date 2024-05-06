import TitleH3 from './TitleH3';
import Button from './Button';


function Screen(props) {
//<ListRadial current={props.current} onChange={props.onChange}/>
    return (
        <div>
            <TitleH3 TitleH3={props.TitleH3}/> 
            <div>{props.content}</div>  
            <Button onClick={props.onClick} label={props.label}/>
        </div>
    )
  }
  
  export default Screen;