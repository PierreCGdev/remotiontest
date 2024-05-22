import database from "./database";

// définir les types ici
// qui vont correspondre à la structure de "database"

// définir le type de la variable data
let data;

function loadDatabase() {
  data = database;
}
loadDatabase();

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
function add(user) {}

// récupérer l'ensemble des utilisateurs
function findAll() {}

// trouve un utilisateur par son id
// retourne l'utilisateur en question
function findUserBydId(id) {}

// trouve les utilisateurs qui correspondent à un id de team
// retourne les utilisateurs
function findUsersByTeam(teamId) {}

// trouve un utilisateur
// retourner true si l'utilisateur existe, sinon false
function userExist(user) {}

// trouve un utilisateur
// change sa team
// retourne l'utilisateur avec sa nouvelle team
function updateUserTeam(user, team) {}

// trouve un utilisateur par son id
// supprimer l'utilisateur
function removeById(id) {}
