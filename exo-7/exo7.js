// fonctions
let addTraductType = () => {
    for (let product of jsonDatas) {
        for (let type in types) {
            if (product.type === type) {
                product.typeTraduction = types[type];
            }
        }
    }
}
let turnOffRadios = (id) => {
    //on fait en sorte que les boutons radio ne soit plus cochés à l'appel de cette fonction
    let radio = document.getElementById(id);
    radio.checked = false;
}
let clearTextInput = (id) => {
    //on fait en sorte que la value de l'input text soit null à l'appel de cette fonction
    let radio = document.getElementById(id);
    radio.value = null;
}
let displayElementsByType = () => {
    turnOffRadios('inStock');
    turnOffRadios('outOfStock');
    let textInput = document.getElementById('typeChoice');
    catalogContainer.innerHTML = '';    //permet de remplacer le contenu de la di catalog par "" (donc rien), pour ensuite pouvoir exécuter le reste de la fonction

    for (let item of jsonDatas) {
        if (item.typeTraduction === textInput.value){
            let product = document.getElementById('catalog');
            product.innerHTML += `<h3>${item.name}</h3>
            <ul>
                <li>Type : ${item.typeTraduction}</li>
                <li>Description : ${item.description}</li>
                <li>Prix : ${item.price} €</li>
                <li>Stock : ${item.quantity}</li>
            </ul>`
        }
    }
}
let displayProducts = (data) => {
    turnOffRadios('inStock');
    turnOffRadios('outOfStock');
    clearTextInput('typeChoice');

    //on efface le code html qu'il y avait à l'endroit visé avant l'appel de cette fonction
    catalogContainer.innerHTML = '';

    //on affiche tous les produits
    for (let item of data) {
        let product = document.getElementById('catalog');
        product.innerHTML += `<h3>${item.name}</h3>
            <ul>
                <li>Type : ${item.typeTraduction}</li>
                <li>Description : ${item.description}</li>
                <li>Prix : ${item.price} €</li>
                <li>Stock : ${item.quantity}</li>
            </ul>`
    }
}
let displayInStockProducts = () => {
    turnOffRadios('outOfStock');
    clearTextInput('typeChoice');
    catalogContainer.innerHTML = '';    //permet de remplacer le contenu de la di catalog par "" (donc rien), pour ensuite pouvoir exécuter le reste de la fonction

    for (let item of jsonDatas) {
        if (item.quantity > 0){
            let product = document.getElementById('catalog');
            product.innerHTML += `<h3>${item.name}</h3>
            <ul>
                <li>Type : ${item.typeTraduction}</li>
                <li>Description : ${item.description}</li>
                <li>Prix : ${item.price} €</li>
                <li>Stock : ${item.quantity}</li>
            </ul>`
        }
    }
}
let displayOutOfStockProducts = () => {
    turnOffRadios('inStock');
    clearTextInput('typeChoice');
    catalogContainer.innerHTML = '';    //permet de remplacer le contenu de la di catalog par "" (donc rien), pour ensuite pouvoir exécuter le reste de la fonction

    for (let item of jsonDatas) {
        if (item.quantity < 1){
            let product = document.getElementById('catalog');
            product.innerHTML += `<h3>${item.name}</h3>
            <ul>
                <li>Type : ${item.typeTraduction}</li>
                <li>Description : ${item.description}</li>
                <li>Prix : ${item.price} €</li>
                <li>Stock : ${item.quantity}</li>
            </ul>`
        }
    }
}


// main
let catalogContainer = document.getElementById('catalog');


let types = {
    car: 'voiture',
    house: 'maison',
    game: 'jeu',
    videoGame: 'jeu vidéo',
    show: 'spectacle'
}


//appel des fonctions
addTraductType();
displayProducts(jsonDatas);
































//Question 4 : Créer une page HTML et lister les articles depuis la donnée.

// console.log('Question 4');
//
// let displayProduct = (productList) => {
//     let catalog = document.getElementById('catalog');
//     for (let product of productList) {
//         catalog.innerHTML += `<h3>${product.name}</h3>
// <ul>
//     <li>Type : ${product.typeTraduction}</li>
//     <li>Description : ${product.description}</li>
//     <li>Prix : ${product.price} €</li>
//     <li>Stock : ${product.quantity}</li>
// </ul>`
//     }
// }
// displayProduct(jsonDatas);


