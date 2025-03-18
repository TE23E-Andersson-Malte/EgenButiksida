//Hämta från localstorage eller skapa en tom array
let varukorg = JSON.parse(localStorage.getItem("varukorg")) || [];

//Funktion för att lägga till i varukorgen och spara i local storage
function LäggTill(namn, pris) {
    //javascriptobjekt för produkterna
    let produkt = { Namn: namn, Pris: pris };
    varukorg.push(produkt);

    //Spara i local storage
    localStorage.setItem("varukorg", JSON.stringify(varukorg));
    VisaIVarukorg();
}

//Funktion för att visa produkterna i varukorgen
function VisaIVarukorg() {
    //Hitta varukorgens ul-element
    let ul = document.querySelector("ul");

    //Rensa för att undvika dubbletter
    ul.innerHTML = "";

    //Loop som repeteras lika många gånger som antal produkter i varukorgen
    for (let index = 0; index < varukorg.length; index++) {
        let vara = varukorg[index];
        let li = document.createElement("li");
        //Skriv ut produkten/varan
        li.textContent = vara.Namn + " | " + vara.Pris + " SEK "

        //Skapa en ta bort knapp (som är en bild på en soptunna)
        let tabortknapp = document.createElement("img");
        tabortknapp.src = "img/släng.webp";
        //om bilden inte fungerar står det "ta bort" istället
        tabortknapp.alt = "Ta bort"

        //en class för knappen för att kunna lägga på css
        tabortknapp.classList.add("tabort_knapp");

        //När knappen trycks ska "ta bort"-funktionen köras
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

//Funktion för att ta bort varor
function TaBortFrånVagn(index) {
    //Tar bort produkten från varukorgen
    varukorg.splice(index, 1);
    //Sparar den uppdaterade varukorgen i local storage
    localStorage.setItem("varukorg", JSON.stringify(varukorg)); 
    VisaIVarukorg(); //Uppdatera varukorgen
}
