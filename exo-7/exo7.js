console.log("exo-7");

//console.log(jsonDatas);

//Question 1 : Parcourir les articles fournis pour les afficher un à un dans la console
console.log('Question 1');

for (let product of jsonDatas) {
    console.log(product);
}



//Question 2 : Créer un objet qui servira à traduire les types.
console.log('Question 2');

let types = {
    car : 'voiture',
    house : 'maison',
    game : 'jeu',
    videoGame : 'jeu vidéo',
    show : 'spectacle'
}
console.log(types);



//Question 3 : Ajouter une nouvelle clé aux objets existants pour stocker le type traduit
console.log('Question 3');

let addTraductType = () => {
    for (let product of jsonDatas) {
        for (let type in types) {
            if (product.type === type) {
                product.typeTraduction = types[type];
            }
        }
    }
}
addTraductType();
console.log(jsonDatas);


//Question 4 : Créer une page HTML et lister les articles depuis la donnée.

console.log('Question 4');

let displayProduct = (productList) => {
    let catalog = document.getElementById('catalog');
    for (let product of productList) {
        catalog.innerHTML += `<h2>${product.name}</h2>
<ul>
    <li>Type : ${product.type}</li>
    <li>Description : ${product.description}</li>
    <li>Prix : ${product.price} €</li>
    <li>Stock : ${product.quantity}</li>
</ul>`
    }
}
displayProduct(jsonDatas);




























