import Radial from './Radial';
import data,{ChoixType} from './data';


type PropsType = {
    current:number;
    onChange:React.ChangeEventHandler<HTMLInputElement>;
}


function ListRadial(props:PropsType) {

    const filterKeys = Object.keys(data[props.current]).filter((result) => result !== 'valide'&& result !== 'question' && result !== 'label'
    );


    const listRadial = filterKeys.map((value:string) => 
        {return <Radial key={value} proposition={data[props.current].question} reponse={data[props.current][value as keyof ChoixType]}  onChange={props.onChange}/>
        }
    )



    return (
            <div>{listRadial}</div>
    )
  }
  
  export default ListRadial;