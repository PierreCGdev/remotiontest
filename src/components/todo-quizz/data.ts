
export type ChoixType = {
  label:string;
  question:string;
  reponse1:string;
  reponse2:string;
  reponse3:string;
  valide:string;
}

const choix:ChoixType[] = [
      {
        label: "Q1",
        question: "Combien de rayures y a-t-il sur le drapeau américain ?",
        reponse1: "18",
        reponse2: "9",
        reponse3:"13",
        valide : "13"
      },
      {
        label: "Q2",
        question: "Quelle est la capitale du Canada ?",
        reponse1: "Ottawa",
        reponse2: "Toronto",
        reponse3:"Montréal",
        valide : "Ottawa"
       },
       {
        label: "Q3",
        question: "Quelle langue comprend le plus grand nombre de mots (selon les entrées du dictionnaire) ?",
        reponse1: "Français",
        reponse2: "Anglais",
        reponse3:"Espagnol",
        valide : "Anglais"
       }
]


export default choix;