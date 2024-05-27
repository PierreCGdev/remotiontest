import database  from "./database.js";

// définir les types ici
// qui vont correspondre à la structure de "database"

// définir le type de la variable data


type TeamData = {
  id:number;
  name:string;
}


type MemberData = {
  id:number;
  name:string;
  email:string;
  team:TeamData;
}

const userTest:MemberData = {
  id: 7,
  name: "surper",
  email: "top",
  team: {
    id: 1,
    name: "surper",
  }
}




let data:MemberData[];

function loadDatabase() {
  data = database;
}




loadDatabase();
//add(userTest)
//findAll();
//findUserBydId(1);
//findUsersByTeam(1);
//userExist("Martin");
//updateUserTeam("Martin", 2)
removeById(1)

// Pour chaque function
// -> écrire la logique en se basant sur les commentaires
// -> ajouter le typage pour les arguments
// -> ajouter le typage pour la sortie de la fonction
//
// tu peux vérifier si TypeScript ne fait pas d'erreur en faisant la commande suivante
// npm run ts:fake-database
//
// --
// tips : tu peux tester toi même appeler tes méthodes
// en fin de fichier pour voir si tout fonctionne bien
// tu peux utiliser des console.log que tu verras dans ton navigateur
// en utilisant la commande npm run dev

// ---

// ajouter un utilisateur
// si l'utilisateur existe déjà (par son id par ex.)
// il ne faut pas l'ajouter
// retourne true si c'est un succés, false si il y a une erreur


function add(user:MemberData) {
  if(data.findIndex((object) => object.id === user.id ) === - 1)
    {data.push(user)
      console.log("ok")
      return true
    } else {
      console.log("nop")
      return false
    }
}
// récupérer l'ensemble des utilisateurs
// retourne l'ensemble des utilisateurs
function findAll() {
  const listUser:string[] = [];
  data.map((user) =>{
    listUser.push(user.name)
    }
  )
  console.log("findAll = " + listUser)
  return listUser
}

// trouve un utilisateur par son id
// retourne l'utilisateur en question
function findUserBydId(id:number) {
  data.map((found) => {
    if(id === found.id) 
      console.log("findUserBydId = " + found.name);
    return found.name
  }
)
}

// trouve les utilisateurs qui correspondent à un id de team
// retourne les utilisateurs
function findUsersByTeam(teamId:number) {
  const listUser:string[] = [];
  data.map((found) => {
    if(teamId === found.team.id) 
      listUser.push(found.name)
    }
  )
  console.log("findUsersByTeam " + teamId + " = " +  listUser);
  return listUser
}

// trouve un utilisateur
// retourner true si l'utilisateur existe, sinon false
function userExist(user:string) {
  data.map((found) => {
    if(user === found.name) {
      console.log("findUserBydId = " + true)}
      return true
    } 
  )
}

// trouve un utilisateur
// change sa team
// retourne l'utilisateur avec sa nouvelle team
function updateUserTeam(user:string, team:number) {
    data.map((found) => {
      if(user === found.name) {
        found.team.id = team;
        console.log(found.name + " de l'équipe " + found.team.id)
      };
    } 
  )
}

// trouve un utilisateur par son id
// supprimer l'utilisateur
// retourne true si c'est un succés ou false en cas d'échec



function removeById(id:number) {
if(data.findIndex((found) => found.id === id )  !== - 1){
  const index = data.findIndex((found) => found.id === id);
  data.splice(index, 1);
  return true

  }else{
  return false
  }
}
