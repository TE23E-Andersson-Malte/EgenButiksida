//Hämta från localstorage eller skapa en tom array
let varukorg = JSON.parse(localStorage.getItem("varukorg")) || [];

//Funktion för att lägga till i varukorgen och spara i local storage
function LäggTill(namn, pris) {
    let produkt = { Namn: namn, Pris: pris };
    varukorg.push(produkt);

    localStorage.setItem("varukorg", JSON.stringify(varukorg));
    VisaIVarukorg();
}

//Funktion för att visa produkterna i varukorgen
function VisaIVarukorg() {
    //Hitta varukorgens ul-element
    let ul = document.querySelector("ul");

    ul.innerHTML = "";

    for (let index = 0; index < varukorg.length; index++) {
        let vara = varukorg[index];
        let li = document.createElement("li");
        li.textContent = vara.Namn + " | " + vara.Pris + " SEK "

        //Skapa en ta bort knapp
        let tabortknapp = document.createElement("button");
        tabortknapp.textContent = "Ta bort"
        tabortknapp.onclick = function() {
            TaBortFrånVagn(index);
        };

        li.appendChild(tabortknapp);
        ul.appendChild(li);
    }
}

function TaBortFrånVagn(index){
    varukorg.splice(index, 1);
    localStorage.setItem("varukorg", JSON.stringify(varukorg));
    VisaIVarukorg(); //Uppdatera varukorgen
}
