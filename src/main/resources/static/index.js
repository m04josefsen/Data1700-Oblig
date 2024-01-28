let billetter = [];
let teller = 0;

function kjopBillett() {
    const billett = {
        film : $("#velgFilm").val(),
        antall : Number($("#innAntall").val()),
        fornavn : $("#innFornavn").val(),
        etternavn : $("#innEtternavn").val(),
        telefonnr : $("#innTelefonnr").val(),
        epost : $("#innEpost").val()
    };

    teller = 0;

    //Input validering for antall;
    if(isNaN(billett.antall) || billett.antall === 0) {
        let ut = "Du må skrive noe over 0 i antall";
        ut = ut.fontcolor("RED");
        document.getElementById("feilmeldingAntall").innerHTML = ut;
    }
    else {
        teller++;
    }

    //Input validering for epost;
    if(billett.epost.includes("@")) {
        teller++;
    }
    else {
        let ut = "Må skrive inn en gyldig epost";
        ut = ut.fontcolor("RED");
        document.getElementById("feilmeldingEpost").innerHTML = ut;
    }

    //Input validering for resten;
    stringValidering(billett.fornavn, "fornavn");
    stringValidering(billett.etternavn, "etternavn");
    stringValidering(billett.telefonnr, "telefonnr");

    if(teller === 5) {
        billetter.push(billett);
        visResultat();
    }
}

function visResultat() {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";

    for(let b of billetter) {
                ut += "<tr>";
                ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn +
                      "</td><td>" + b.etternavn + "</td><td>" + b.telefonnr +  "</td><td>" + b.epost + "</td>";
                ut += "</tr>";
            }
    ut += "</table>";

    document.getElementById("resultat").innerHTML = ut;
}

function stringValidering(string, type) {
    if(string === "") {
        //TODO: gjør rød tekst
        let ut = "Må skrive noe inn i " + type;
        ut = ut.fontcolor("RED");
        document.getElementById("feilmelding" + type).innerHTML = ut;
    }
    else {
        teller++;
    }

}

function slettAlle() {
    billetter.length = 0;
    visResultat();
}