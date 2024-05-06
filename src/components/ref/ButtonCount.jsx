
import { useState } from 'react';

function ButtonCount() {
  // On définie notre state (par défaut à false dans notre exemple)
  // La méthode useState retourne un tableau
  // -> la première valeur, ici active, est la valeur actuelle du state
  // -> la deuxième, ici setActive, permet de modifier le state
  const [active, setActive] = useState(0);

  // On défini une méthode pour changer le state
  const increaseState = () => {
    // On met à jour le state
    setActive(active + 1);
  };

    const decreaseState = () => {
        if(active === 0){
            active
        }else{
        // On met à jour le state
        setActive(active - 1);}
      };


  // A chaque changement de state, React refait le rendu


  return (
    <div>
      <button onClick={increaseState}>plus un</button>
      <button onClick={decreaseState}>moins un</button>
      <p>nombre : {String(active)}</p>
    </div>
    
  );
}

export default ButtonCount
