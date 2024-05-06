/* eslint-disable react/prop-types */

// On crée un composant Titre
// En paramètre, on récupère l'objet props
function Title(props) {
  // On affiche notre rendu avec le contenu de props.text
  return <h2>Prefix de mon titre - {props.text}</h2>
}

function BasicProps() {
  // On fait notre rendu
  // En utilisant notre composant Title avec la prop text à "Hello props"
  return (
    <div>
      <Title text="Hello props" />
      <h4>Mon sous titre</h4>
    </div>
  );
}

export default BasicProps;