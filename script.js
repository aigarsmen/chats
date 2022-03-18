//console.log(2)
const API = "https://chat2022.aigarsmendiks.repl.co"

let zina = document.querySelector('.manaZina');//.value//piekļūst laukumam, value uzzina tieši kas rakstits
let zinas = document.querySelector('.chataZinas');
let vards = document.querySelector('.vards');


function sutitZinu()
{
    console.log('sutit');

    zinas.innerHTML = zinas.innerHTML + '<br />' + zina.value; //mainam html

    fetch(API + '/sutit/'+vards.value + '/' + zina.value)

}

async function ieladetChataZinas()
{
    let datiNoServera = await fetch(API +'/lasit');
    let dati = await datiNoServera.text(); //pasaka grib redzet kā tekstu

    zinas.innerHTML = dati;
}

//setInterval( ieladetChataZinas, 1000 )

async function ieladetChataZinasJson()
{
    let datiNoServera = await fetch(API +'/lasit');
    let dati = await datiNoServera.json();
    
    //console.log(await dati[0]['zina'])
    zinas.innerHTML = '';
    i = 0;
    while ( i < await dati.length)
    {
        //console.log(i);
        zinas.innerHTML = zinas.innerHTML +dati[i]['vards']+' : ' + dati[i]['zina'] + '<br />';
        i = i+1;
    }

    zinas.scrollTop = zinas.scrollHeight;
   
}
setInterval( ieladetChataZinasJson, 1000)