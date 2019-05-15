import Taller from "./Taller.js";
import Participantes from "./Participantes.js";

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
        console.log(lsTalleres);

        if(lsTalleres === null){
            return;
        }
        lsTalleres.forEach((taller, index) => {
            taller.initDate = new Date(taller.initDate);
            taller.finDate = new Date(taller.finDate);
            this._showInTable(new Taller(taller));
        });
    }

    _addParticipant(taller, participante) {
        participante.id = taller.id;
        taller.participants.push(participante);
        console.log(taller);
        let lsTalleres = JSON.parse(localStorage.getItem("talleres"));
        lsTalleres[taller.id - 1] = taller;
        
        console.log(lsTalleres);
        this._addParticipantsToTable(participante);
    }

    _showInTable(taller) {
        let row = this._tableregisTaller.insertRow(-1);

        let cellTallerName = row.insertCell(0);
        let cellInitDate = row.insertCell(1);
        let cellFinDate = row.insertCell(2);
        let cellPlacesDis = row.insertCell(3);
        let cellDuracionTa = row.insertCell(4);
        let cellPartic = row.insertCell(5);
        let cellShow = row.insertCell(6);
        let cellDelete = row.insertCell(7);

        //Buton Registro de Participantes
        let btnAddPa = document.createElement("input");
        btnAddPa.type = "button";
        btnAddPa.value = "Registrar";
        btnAddPa.className = "btnAddPa btn-add";
        btnAddPa.addEventListener("click", () => {

            //Form Resgistro de participantes
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

            //Buton Agregar Participante
            let btnAdd = document.createElement("input");
            btnAdd.type = "button";
            btnAdd.value = "Añadir";
            btnAdd.className = "btnAddPrt";
            divBlanco.appendChild(btnAdd);
            btnAdd.addEventListener("click", () => {

                //if (form2.checkValidity() === true) {
                let partName = document.getElementById("inputName").value;
                let partCorreo = document.getElementById("inputEmail").value;
                let partBirthday = document.getElementById("inputBirthday").value;
        
                this._body.removeChild(divNegro);
                this._body.removeChild(divBlanco);

                let objParticipante = {
                    partName: partName,
                    email: partCorreo,
                    birthday: partBirthday,
                    id: taller.id
                }
                    //console.log(objParticipante);

                    let participante = new Participantes(objParticipante);
                    console.log(participante);

                    this._addParticipant(taller, participante);
                    
                    Swal.fire({
                        title: 'Listo!',
                        text: 'Registrado',
                        type: 'success',
                        confirmButtonText: 'Hecho'
                    })
                    divBlanco.appendChild(btnAdd);
            });
            //Fin Buton Agregar Particante

            //Buton Cancelar registro de participantes
            let btnCancelar = document.createElement("input");
            btnCancelar.type = "button";
            btnCancelar.value = "Cancelar";
            btnCancelar.className = "btnCancelPart";
            divBlanco.appendChild(btnCancelar);
            btnCancelar.addEventListener("click", () => {
                this._body.removeChild(divBlanco);
                this._body.removeChild(divNegro);
            });


            //Fin Form Resgistro de participantes
        });
        //Fin Buton Registro de Participantes

        // Buton Mostrar Participantes
        let btnShow = document.createElement("input");
        btnShow.type = "button";
        btnShow.value = "Ver Participantes";
        btnShow.className = "btn btn-ShowPart";
        btnShow.addEventListener("click", () => {
            
            let divNegro = document.createElement('div');
            divNegro.classList = "divNegro";
            body.appendChild(divNegro);

            let divBlanco2 = document.createElement('div');
            divBlanco2.classList = "divBlanco2";
            body.appendChild(divBlanco2);
                 
            let container = document.getElementById("container");

            var wsTable = document.createElement("table");
            wsTable.className = "table";
            var tblBody = document.createElement("tbody");  
            
            var row3 = document.createElement("tr");
            row3.className = "border";
    
            let nameCell = document.createElement("th");
            nameCell.className = "studCell th";
            let nameCellText = document.createTextNode(`Name:`);
            nameCell.appendChild(nameCellText);
            row3.appendChild(nameCell);
    
            let bDateCell = document.createElement("th");
            bDateCell.className = "studCell th";
            let bDateCellText = document.createTextNode(`Birth date:`);
            bDateCell.appendChild(bDateCellText);
            row3.appendChild(bDateCell);
    
            let emailCell = document.createElement("th");
            emailCell.className = "studCell th";
            let emailCellText = document.createTextNode(`Email:`);
            emailCell.appendChild(emailCellText);
            row3.appendChild(emailCell);
    
            let blankPCell = document.createElement("th");
            blankPCell.className = "studCell th";
            let blankPCellText = document.createTextNode(``);
            blankPCell.appendChild(blankPCellText);
            row3.appendChild(blankPCell);
    
            let blankBtnCell = document.createElement("th");
            blankBtnCell.className = "addCell th";
            row3.appendChild(blankBtnCell);

            //Buton Cancelar vista participantes
            let btnCancelar2 = document.createElement("input");
            btnCancelar2.type = "button";
            btnCancelar2.value = "Salir";
            btnCancelar2.className = "btnCancelPart2";
            btnCancelar2.addEventListener("click", () => {
                this._body.removeChild(divBlanco2);
                this._body.removeChild(divNegro);
            });
            divBlanco2.appendChild(btnCancelar2);
            //Fin Buton Cancelar vista de participantes

            divBlanco2.appendChild(row3);
            wsTable.appendChild(tblBody);
            container.appendChild(wsTable);
          
        });
        //Fin Mostrar Participantes

        // Buton Eliminar Taller
        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = "Eliminar";
        btnDelete.className = "btn btn-danger";
        btnDelete.addEventListener("click", () => {

            //tblBody.removeChild(row);

        });
        //Fin Buton Eliminar Taller

        cellTallerName.innerHTML = taller.tallerName;
        cellInitDate.innerHTML = taller.getInitDate();
        cellFinDate.innerHTML = taller.getFinDate();
        cellPlacesDis.innerHTML = taller.placesDis;
        cellDuracionTa.innerHTML = taller.duracionTa;
        cellPartic.appendChild(btnAddPa);
        cellShow.appendChild(btnShow);
        cellDelete.appendChild(btnDelete);

        this._id++;


        let objTaller = {
            tallerName: taller.tallerName,
            initDate: taller.initDate,
            finDate: taller.finDate,
            placesDis: taller.placesDis,
            duracionTa: taller.duracionTa,
            participante: taller.participante,
            id: this._id
        }
        this._talleres.push(objTaller);
        console.log(objTaller);

    }
    //Fin metodo _showInTable

    addTaller(taller) {
        this._showInTable(taller);
        localStorage.setItem("talleres", JSON.stringify(this._talleres));
        console.log(localStorage.getItem("talleres"));
    }

    _addParticipant(taller, participante) {
        participante.id = taller.id;
        taller.placesDis = taller.placesDis - 1;

        let objParticipant = {
            name: participante.partName,
            birthday: participante.birthday,
            email: participante.email
        }

        taller.participantes.push(objParticipant);
        console.log(objParticipant);
        let lsTalleres = JSON.parse(localStorage.getItem("talleres"));

        let objTaller = {
            tallerName: taller.tallerName,
            initDate: taller.initDate,
            finDate: taller.finDate,
            placesDis: taller.placesDis,
            duracionTa: taller.duracionTa,
            participante: taller.participante,
            id: this._id
        }
        
        lsTalleres[pos] = objTaller;
        
        this._showInTable(participante, objTaller.name);
        localStorage.setItem("talleres", JSON.stringify(lsTalleres));
        console.log(lsTalleres);
    }
}