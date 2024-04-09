// On importe la méthode useState de react
import { useState } from 'react';

function BasicState() {
  // On définie notre state (par défaut à false dans notre exemple)
  // La méthode useState retourne un tableau
  // -> la première valeur, ici active, est la valeur actuelle du state
  // -> la deuxième, ici setActive, permet de modifier le state
  const [active, setActive] = useState(false);

  // On défini une méthode pour changer le state
  const toggleState = () => {
    // On met à jour le state
    setActive(!active);
  };

  // A chaque changement de state, React refait le rendu
  console.count('render');

  return (
    <div>
      <button onClick={toggleState}>Toggle state</button>
      <p>Active : {String(active)}</p>
    </div>
  );
}

export default BasicState;