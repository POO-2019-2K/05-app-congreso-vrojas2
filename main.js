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
                
                sInitDate = sInitDate.split("-");
                sFinDate = sFinDate.split("-");

                let initDate = new Date(sInitDate[0], sInitDate[1]-1, sInitDate[2]);
                let finDate = new Date(sFinDate[0], sFinDate[1]-1, sFinDate[2]);


                let objTaller = {
                    tallerName: tallerName,
                    initDate: initDate,
                    finDate: finDate,
                };

                let taller = new Taller(objTaller);

                registros.addEmployee(taller);
            }
    
            form.classList.add("was-validated");
        });
    }
}

let m = new Main();