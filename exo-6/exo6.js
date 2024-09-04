// Cours 8 de Codecademy
console.log("exo-6");

console.log("Question 1 : ");
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log((joeInfo.cars).length)
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(`${joeInfo.bathrooms}`)
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(`${joeInfo.garage}`)


console.log("Questions suite :");

let team = {
    players: [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age:11,
    }],
    games: [{
        opponent: "Broncos",    //opponent = adversaire
        teamPoints:42,
        opponentPoints: 27,
    }]
}

//question 6 : méthode qui ajoute un player
let addPlayer = (firstName, lastName, age) => {
    let newPlayer = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }
    team.players.push(newPlayer);
}

//question 8 : Faire la même chose pour les matchs, stockés dans le tableau games.
let addGame = (opponent, teamPoints, opponentPoints) => {
    let newGame = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
    }
    team.games.push(newGame);
}

//question 9 : Appeler vos fonctions plusieurs fois pour avoir un objet avec suffisamment de données.
addPlayer("Tiki", "Ty", 5);
addPlayer("Jean", "Michel",9 );
addPlayer("Bob", "L'éponge", 16);
addGame("Victor", 24, 15);
addGame("Patrick", 18, 29);
addGame("Krabs", 59, 2);

console.log(team.players);
console.log(team.games);

//Question 10 : Calculer la somme des points de votre équipe sur tous les matchs joués.
let getTeamPoints = () => {
    let totalPoints=0;
    for (const game of team.games) {
        totalPoints += game.teamPoints;
        //totalPoints = totalPoints + game.teamPoints;
    }
    return totalPoints;
}
console.log(getTeamPoints());

//Question 11 : Calculer la moyenne des points de l'équipe adverse sur tous les matchs.
//average = moyenne
let getAverageOpponentPoints = () => {
    let totalPoints=0;
    let numberOfGames = 0;
    for (const game of team.games) {
        totalPoints += parseInt(game.opponentPoints);
        numberOfGames += 1;
    }
    return Math.floor(totalPoints / numberOfGames);
}
console.log("Moyenne des points des adversaires :"+ getAverageOpponentPoints());

//Question 12 : une fonction qui permet de trouver le joueur le plus âgé.
let getOldestPlayer = () => {
    let oldestPlayer = "";
    let oldestAge = 0;
    for (const player of team.players) {
        if(player.age > oldestAge){
            oldestPlayer = player.firstName;
            oldestAge = player.age;
        }
    }
    console.log(oldestPlayer);
}
//console.log(getOldestPlayer());
getOldestPlayer();