import AddItemlist from './AddItemlist';

type PropsType = {
  arrayName:string[];
  arrayFn:React.Dispatch<React.SetStateAction<string[]>>;
  }


function CreateList(props:PropsType) { 

    const cleanTodo = (value:string):string[]  | undefined  => {
        let oldValues
        props.arrayFn(oldValues => {
          return oldValues.filter(updated => updated !== value)
        })
        return oldValues
      };
    
    
    const validChange = (item:string, message:string) => {
        const itemKey = props.arrayName.indexOf(item); 
        // item ici est un tableau, comment il peut être un index dans un autre tableau ?
        if (itemKey > - 1) {
          const newItems = props.arrayName.map((value:string, index:number) => {
            // je pense que j'ai du mal à comprendre comment map fonctionne ici, la deuxième valeur de la fonction est toujours l'index ?
            if (index === itemKey) {
              return message;
          }
          return value;
          });
          props.arrayFn(newItems);
      }
    };

    const listeUpdate = () => {
      return props.arrayName.map((item) => {
        // il y a deux fois le return, pourquoi autant ?
        return(
            <AddItemlist  
            key={item}
            item={item}
            btnActionremove={cleanTodo} 
            btnActionmodif={validChange}
            // ici j'avais mis () => avant l'appel de la const, mais ça ne marchait pas. il y a une raison ?
            // je mettais les valeurs pour les fonctions ici, au lieu de le faire dans le composant
            />
        );
      });    
    };

    return (
        <ul>
            {listeUpdate()}
        </ul>
    );
  };

  
  export default CreateList;