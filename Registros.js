import Taller from "./Taller.js";

export default class Registros {
  constructor(tableregisTaller) {
    this._tableregisTaller = tableregisTaller;
    this._body = body;
    this._id = 0;
    //localStorage.removeItem("talleres");
    this._initTables();
    this._talleres = [];
    this._participant = new Array();
  }

    _initTables() {
        let lsTalleres = JSON.parse(localStorage.getItem("talleres"));
        if(lsTalleres === null){
            return;
        }
        lsTalleres.forEach((e, index) => {
            taller.initDate = new Date(taller.initDate);
            taller.finDate = new Date(taller.finDate);
            this._showInTable(new Taller(taller));
            this.createTarget(this._actual, e.id);     
        });
    }

    _showInTable(taller) {
        let row = this._tableregisTaller.insertRow(-1);

        let cellTallerName = row.insertCell(0);
        let cellInitDate = row.insertCell(1);
        let cellFinDate = row.insertCell(2);
        let cellPlacesDis = row.insertCell(3);
        let cellDuracionTa = row.insertCell(4);
        let cellPartic = row.insertCell(5);
        let cellDelete = row.insertCell(6);

        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = "Eliminar";
        btnDelete.className = "btn btn-danger";
        btnDelete.addEventListener("click", () => {
        });

        let btnAddPa = document.createElement("input");
        btnAddPa.type = "button";
        btnAddPa.value = "Registrar";
        btnAddPa.className = "btnAddPa btn-add";
        btnAddPa.addEventListener("click", () => {


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
            btnAdd.className = "btnAddPrt";
            divBlanco.appendChild(btnAdd);
            btnAdd.addEventListener("click", () => {

                let partName = document.getElementById("inputName").value;
                let partcorreo = document.getElementById("inputEmail").value;
                let partbirthday = document.getElementById("inputBirthday").value;
    
                this._body.removeChild(divNegro);
                this._body.removeChild(divBlanco);
    
                let objParticipante = {
                    partName: partName,
                    email: partcorreo,
                    birthday: partbirthday,
                    id: taller.id
                }
    
                let participante = new Participante(objParticipante);
    
                this._addParticipante(taller, participante, tblBody)

                
                this._talleres.splice(index, 1, newObj);
                localStorage.setItem('talleres', JSON.stringify(this._talleres));
                this._body.removeChild(divBlack);
                this._taller.innerHTML = " ";
                this.initCards();

                Swal.fire({
                    title: 'Ready!',
                    text: 'workshop successfully edited!',
                    type: 'success',
                    confirmButtonText: 'OK'
                })

            });

            let btnCancelar = document.createElement("input");
            btnCancelar.type = "button";
            btnCancelar.value = "Cancelar";
            btnCancelar.className = "btnCancelPart";
            divBlanco.appendChild(btnCancelar);
            btnCancelar.addEventListener("click", () => {
                this._body.removeChild(divBlanco);
                this._body.removeChild(divNegro);
            });

            this._body.appendChild(divBlanco);


        });

        cellTallerName.innerHTML = taller.tallerName;
        cellInitDate.innerHTML = taller.getInitDate();
        cellFinDate.innerHTML = taller.getFinDate();
        cellPlacesDis.innerHTML = taller.placesDis;
        cellDuracionTa.innerHTML = taller.duracionTa;
        cellPartic.appendChild(btnAddPa);
        cellDelete.appendChild(btnDelete);

        let objTaller = {
            tallerName: taller.tallerName,
            initDate: taller.initDate,
            finDate: taller.finDate,
            placesDis: taller.placesDis,
            duracionTa: taller.duracionTa
        }

        this._talleres.push(objTaller);
        }

    addTaller(taller) {
        this._showInTable(taller);
        localStorage.setItem("talleres", JSON.stringify(this._talleres));
        //console.log(localStorage.getItem("talleres"));
    }
}