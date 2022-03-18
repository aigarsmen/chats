//console.log(2)
const API = "https://chat2022.aigarsmendiks.repl.co/"
let zina = document.querySelector('.manaZina');//.value//piekļūst laukumam, value uzzina tieši kas rakstits
let zinas = document.querySelector('.chataZinas');
function sutitZinu()
{
    console.log('sutit');

    zinas.innerHTML = zinas.innerHTML + '<br />' + zina.value; //mainam html
}

async function ieladetChataZinas()
{
    let datiNoServera = await fetch('chatazinas.txt');
    let dati = await datiNoServera.text(); //pasaka grib redzet kā tekstu

    zinas.innerHTML = dati;
}

setInterval( ieladetChataZinas, 1000 )