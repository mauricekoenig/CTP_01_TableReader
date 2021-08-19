"use strict";

/********  Variablen **********/

// ein Objekt "person" wird angelegt
const person = {
    firstName: "Anton",
    lastName: "Mustermann"
}
// Variable persons wird als Array angelegt
let persons = [];


const dispBtn1 = document.getElementById("dispBtn1");


/******** Event Listener **********/

dispBtn1.addEventListener("click", showList);

/******** business logic **********/


// Das Objekt "person" wird in das Array "persons" gepusht
persons.push(person);

// Dem Array persons wird ein weiteres Objekt hinzugefügt, das zuvor nicht extra deklariert wurde
persons.push({
    firstName: "Moritz",
    lastName: "Mustermann"
});
persons.push({
    firstName: "Berta",
    lastName: "Bertelsmann"
});

// Ausgaben zu Testzwecken in der Console
// ausgabe(person);
// ausgabe(person.firstName);
ausgabe(persons);
// ausgabe(persons[0].firstName);
// ausgabe(persons[0].lastName);


/************** Änderungen an HTML / Viewschicht *****************/


// Zeigt das erste Element des Arrays "persons" in einer Liste im HTML Dokument an
function showList() {
    let newLi = document.createElement("li");
    newLi.innerText = persons[0].firstName + " " + persons[0].lastName;
    document.getElementById("ul1").appendChild(newLi);
}





/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}
