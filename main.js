import Registros from "./Registros.js";
import Taller from "./Taller.js";

class Main {
    constructor() {
        let registros = new Registros(document.querySelector("#regisTaller"));
        var body = document.querySelector('#body');

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

        document.querySelector("#btnAddPa").addEventListener("click", () => {

            let divNegro = document.createElement('div');
            divNegro.classList = "divNegro";
            body.appendChild(divNegro);

            let divBlanco = document.createElement('div');
            divBlanco.classList = "divBlanco";
            body.appendChild(divBlanco);

            let labelTitle = document.createElement("label");
            labelTitle.classList = "controlLabelTitle";
            labelTitle.innerText = "Registro de Participantes";
            divBlanco.appendChild(labelTitle);
            
            let labelName = document.createElement("label");
            labelName.classList = "controlLabelName";
            labelName.innerText = "Nombre del participante";
            divBlanco.appendChild(labelName);

            let inputName = document.createElement("input");
            inputName.type = "text";
            inputName.classList = "form-control-md controlInput";
            inputName.id = "inputName";
            inputName.placeholder= "Juan Perez";
            divBlanco.appendChild(inputName);
           
            let labelEmail = document.createElement("label");
            labelEmail.classList = "controlLabel marginToplabel1";
            labelEmail.innerText = "Correo electronico";
            divBlanco.appendChild(labelEmail);

            let inputEmail = document.createElement("input");
            inputEmail.type = "email";
            inputEmail.classList = "form-control-md controlInput";
            inputEmail.id = "inputEmail";
            inputEmail.placeholder= "juanperez@gmail.com";
            divBlanco.appendChild(inputEmail);
            
            let labelBirthday = document.createElement("label");
            labelBirthday.classList = "controlLabel marginToplabel";
            labelBirthday.innerText = "Fecha de Nacimiento";
            divBlanco.appendChild(labelBirthday);
            
            let inputBirthday = document.createElement("input");
            inputBirthday.type = "date";
            inputBirthday.classList = "form-control-md controlInput";
            inputBirthday.id = "inputBirthday";
            divBlanco.appendChild(inputBirthday);

            let btnAdd = document.createElement("input");
            btnAdd.type = "button";
            btnAdd.value = "Registar";
            btnAdd.className = "btn-add-part";
            divBlanco.appendChild(btnAdd);
            btnAdd.addEventListener("click", () => {

                let partName = document.getElementById("inputName").value;
                let partcorreo = document.getElementById("inputEmail").value;
                let partbirthday = document.getElementById("inputBirthday").value;
    
                this._body.removeChild(divBlack);
                this._body.removeChild(divBlanco);
    
                let objParticipante = {
                    partName: partName,
                    email: partcorreo,
                    birthday: partbirthday,
                    id: taller.id
                }
    
                let participante = new Participant(objParticipante);
    
                this._addParticipante(taller, participante, tblBody)
            });

        });
    }

}
let m = new Main();