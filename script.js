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
        let tabortknapp = document.createElement("img");
        tabortknapp.src = "img/släng.webp";
        tabortknapp.alt = "Ta bort"

        tabortknapp.style.width = "35px";
        tabortknapp.style.height = "35px";

        tabortknapp.onclick = function () {
            TaBortFrånVagn(index);
        };

        li.appendChild(tabortknapp);
        ul.appendChild(li);
    }

    //Beräkna totalkostnaden
    let total = 0;
    for (let i = 0; i < varukorg.length; i++) {
        total += (varukorg[i].Pris);
    }
    //Uppdatera texten som beskriver totalkostnaden
    document.getElementById("total").textContent = "TOTAL: " + total + " SEK";
}

function TaBortFrånVagn(index) {
    varukorg.splice(index, 1);
    localStorage.setItem("varukorg", JSON.stringify(varukorg));
    VisaIVarukorg(); //Uppdatera varukorgen
}
