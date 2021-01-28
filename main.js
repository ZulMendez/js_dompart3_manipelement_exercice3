// 1
let myElements = document.querySelector('div#object').children;
console.log(myElements);

// 2
let info = {
    nom: 'Zulma',
    age: 29,
}
let prop = Object.keys(info);
console.log(Object.keys(info));

// 3
prop.forEach(el => {
        console.log(el);
});

// 4
prop.forEach(el => {
    console.log(monObjet[el]);
});

// 5
prop.forEach((el,i) => {
    console.log(monObjet[el], i);
});

// 6
prop.forEach((el,i) => {
    myElements[i].innerText = monObjet[el]
});

// let count=0; 
// for(key in monObjet){
//     console.log(myElements[count]);
//     myElements[count].innerHTML=monObjet[key];
//     count++;
// }


//OBJET VALUE
console.log(Object.values(monObjet));
let valeur = Object.values(monObjet)

valeur.forEach((el,i) => {
    myElements[i].innerText = el
});