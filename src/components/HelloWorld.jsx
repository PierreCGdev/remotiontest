// Un composant est une fonction JS
// Ici on déclare la fonction et donc le composant HelloWorld
function HelloWorld() {

  // Un composant doit toujours retourner du JSX
  // C'est le rendu qui va être injecté dans le DOM
  // Bien que l'on utilise la balise HTML <p> ici, en réalité on écrit du JSX
  return <p>test pour voir 321</p>;
}

// On exporte notre composant du fichier
// Ce qui nous permet de l'importer dans un autre fichier
export default HelloWorld
