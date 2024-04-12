function ElementListe(liste) {

  return (
    listeUpdate = liste.map(item => 
        <li key={item}><span>{item}</span> <button onClick={() => cleanTodo(item)}>supprimer</button></li>
        ));
}

export default ElementListe