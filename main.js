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
    tablaInsert();

    rendezKattintas();
}

function tablaInsert() {
    let txt = tablaOsszeallit();
    const MAIN = $("main");
    MAIN.html(txt);
}


function tablaOsszeallit() {
    let txt = "<table><tr>";

    for (const datas in adatok[0]) {
        txt += `<th id="${datas}">${datas}</th>`;
    }
    txt += "</tr>"

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

function rendezKattintas() {
    let keys = kulcsalRendel();

    for (let i = 0; i < keys.length; i++) {
        keys[i].on("click", function() {
            let adatok = rendez(this.id);
            main();
        });
        
    }
    
}

function kulcsalRendel() {
    let keys = [];  

    for (const key in adatok[0]) {
        keys.push($("#" + key));
    }
    return keys;
}

function rendez(kulcs) {
    let rendezett = adatok;
    
    for(let i = 0; i < adatok.length-1; i++) {

        for(let j = i+1; j < adatok.length; j++) {
            if (adatok[i][kulcs] > adatok[j][kulcs]) {
                let cs = adatok[i];
                adatok[i] = adatok[j];
                adatok[j] = cs;
            }
        }
    }

    return rendezett;
}
