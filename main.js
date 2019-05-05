import Registros from "./Registros.js";
import Taller from "./Taller.js";

class Main {
    constructor() {
        let registros = new Registros(document.querySelector("#regisTaller"));

        document.querySelector("#btnAddTa").addEventListener("click", () => {
            let form = document.querySelector("#form");

            if(form.checkValidity() === true) {
                let tallerName = document.querySelector("#tallerName").value;

                let objTaller = {
                    tallerName: tallerName,
                };

                let taller = new Taller(objTaller);

                registros.addEmployee(taller);
            }
    
            form.classList.add("was-validated");
        });
    }
}

let m = new Main();