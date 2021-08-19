
// tableReader.js - Letze Änderung: Maurice König

"use strict";

let persons = [];
const dispBtn1 = document.getElementById("dispBtn1");
const ul1 = document.getElementById("ul1"); 

dispBtn1.addEventListener("click", showList);
pushNames();
print(persons);

function showList() {

    if (ul1.childElementCount > 0) return;
    if (persons.length == 0) return;

    for (let i = 0; i < persons.length; i++){

        let newListElement = document.createElement("li");
        newListElement.innerText = persons[i].firstName + " " + persons[i].lastName;
        ul1.appendChild(newListElement);
    }
}

function pushNames (){

    const person = {
        firstName: "Anton",
        lastName: "Mustermann"
    }
    
    persons.push(person);
    
    persons.push({
        firstName: "Moritz",
        lastName: "Mustermann"
    });
    
    persons.push({
        firstName: "Berta",
        lastName: "Bertelsmann"
    });
}


function print (outputStr) {
    console.log(outputStr);
}
