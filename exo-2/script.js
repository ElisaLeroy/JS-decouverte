// you can write js here
console.log('exo-2');
const myDate = new Date();
let isTesting = true;
let weekMessage = 'Nous sommes un jour de semaine.';
let weekEndMessage = 'Nous sommes en week-end !!';
let actualDay;
let actualHour;

if (isTesting === true) {
    actualDay = parseInt(prompt('Enter the day (0 for Sunday, 1 for Monday ...'));
    actualHour = parseInt(prompt('Enter the Hour (exemple : 17)'));
}
else{
    actualDay = myDate.getDay();
    actualHour = myDate.getHours();
}
console.log(actualDay);


if (actualDay !== 0 && actualDay !== 6){
    if(actualDay === 5 && actualHour >= 17 ){
        console.log(weekEndMessage);
    }
    else if(actualDay === 1 && actualHour <= 9 ){
        console.log(weekEndMessage);
    }
    else {
        console.log(weekMessage);
    }
}
else{
    console.log(weekEndMessage);
}


