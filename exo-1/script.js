// you can write js here
let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
//prompt : affiche un pop up remplissable apparait, la variable prend la valeur du resultat du popup


//let kelvins = 294;
let celcius;

function kelvinsToCelsius(kelvins){
    return kelvins - 273;      //pour convertir des kelvins en celsius, on soustrait au kelvins 273
}
celcius = kelvinsToCelsius(kelvins);
console.log(celcius);

function celciusToFarenheit(celcius){
    return  Math.floor(celcius * (9/5) + 32);   //on retourne celcius auquel on applique le calcul pour le transformer en farenheit. On met le tout dans une méthode pour le tranformer en entier (maths.floor)
}
let farenheit = celciusToFarenheit(celcius);
console.log(farenheit);
