//Hämta från localstorage eller skapa en tom array
let varukorg = JSON.parse(localStorage.getItem("varukorg")) || [];

//Hitta varukorgens ul-element
const ul = document.querySelector(ul);

//Funktion för att lägga till i varukorgen och spara i local storage
function LäggTill(namn, pris)
{
    let produkt = { Namn: namn, Pris: pris};
    varukorg.push(produkt);

    localStorage.setItem("varukorg", JSON.stringify(varukorg));
    VisaIVarukorg();
}

//Funktion för att visa produkterna i varukorgen
function VisaIVarukorg()
{
    
}
