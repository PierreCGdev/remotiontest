import Radial from './Radial';
import data from './data';

function ListRadial(props) {

    const filterKeys = Object.keys(data[props.current]).filter((result) => result !== 'valide'&& result !== 'question' && result !== 'label'
    );


    const listRadial = filterKeys.map((value) => 
        {return <Radial key={value} proposition={data[props.current].question} id={data[props.current][value]} reponse={data[props.current][value]}  onChange={props.onChange}/>
        }
    )



    return (
            <div>{listRadial}</div>
    )
  }
  
  export default ListRadial;