$(function() {
    main();
});

let adatok = [
    {
        nev : "Alma",
        tul1 : "Piros",
        tul2 : "van levele"
    },
    {
        nev : "Autó",
        tul1 : "színes",
        tul2 : "van kereke"
    },
    {
        nev : "Sanyi",
        tul1 : "gépel",
        tul2 : "mellettem ül"
    }
];

function main() {
    let txt = tablaOsszeallit();
    const MAIN = $("main");
    MAIN.html(txt);
}

function tablaOsszeallit() {
    let txt = "<table><tr>";

    for (const datas in adatok[0]) {
        txt += `<th>${datas}</th>`;
    }
    txt += "<tr>"
    
    for (let i = 0; i < adatok.length; i++) {
        let adatSor = adatok[i];
        txt += "<tr>"

        for (const datas in adatSor) {
            txt += `<td>${adatSor[datas]}</td>`;
        }
        
        txt += "</tr>";
    }
    txt += "</table>";
    return txt;
}

