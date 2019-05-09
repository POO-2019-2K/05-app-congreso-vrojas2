import Registros from "./Registros.js";
import Taller from "./Taller.js";

class Main {
    constructor() {
        let registros = new Registros(document.querySelector("#regisTaller"));

        document.querySelector("#btnAddTa").addEventListener("click", () => {
            let form = document.querySelector("#form");

            if(form.checkValidity() === true) {
                let tallerName = document.querySelector("#tallerName").value;
                let sInitDate = document.querySelector("#initDate").value;
                let sFinDate = document.querySelector("#finDate").value;
                let placesDis = document.querySelector("#placesDis").value;
                let duracionTa = document.querySelector("#duracionTa").value;
                
                sInitDate = sInitDate.split("-");
                sFinDate = sFinDate.split("-");

                let initDate = new Date(sInitDate[0], sInitDate[1]-1, sInitDate[2]);
                let finDate = new Date(sFinDate[0], sFinDate[1]-1, sFinDate[2]);


                let objTaller = {
                    tallerName: tallerName,
                    initDate: initDate,
                    finDate: finDate,
                    placesDis: placesDis,
                    duracionTa: duracionTa
                };

                let taller = new Taller(objTaller);

                registros.addTaller(taller);
            }
    
            form.classList.add("was-validated");
        });
    }
}
let m = new Main();


import RegistrosPar from "./RegistrosPar.js";
import Participants from "./Participantes.js";

class Main2 {
    constructor() {
        let registrosPar = new RegistrosPar(document.querySelector("#regisParti"));

        document.querySelector("#btnAddPar").addEventListener("click", () => {
            let form = document.querySelector("#form");

            if(form.checkValidity() === true) {
                let partName = document.querySelector("#partName").value;
                let email = document.querySelector("#email").value;
                let sBirthday = document.querySelector("#birthday").value;
                
                sBirthday = sBirthday.split("-");

                let birthday = new Date(sBirthday[0], sBirthday[1]-1, sBirthday[2]);

                let objParticipants = {
                    partName: partName,
                    birthday: birthday,
                    email: email,
                };

                let participants = new Participants(objParticipants);

                registrosPar.addParticipante(participants);
            }
    
            form.classList.add("was-validated");
        });
    }
}

let m2 = new Main2();
