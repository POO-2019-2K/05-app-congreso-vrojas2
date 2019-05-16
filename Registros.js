import TablePart from './RegistrosPar.js';

export default class RegisTaller {
    constructor(regisTaller, tablePart, idTallerToShowItsParticipantes) {
        this._table = regisTaller;
        this._talleres = new Array();
        this._tablePart = new TablePart(tablePart, this);
        //localStorage.removeItem("talleres");
        this._actualizar(idTallerToShowItsParticipantes);
        document.querySelector('#btnRegister').addEventListener('click', () => {
            this.addParticipante();
        })
    }

    _actualizar(idTallerToShowItsParticipantes) {
        for (let i = this._table.rows.length - 1; i > 1; i--) {
            this._table.deleteRow(i);
        }
        this._actualizarArrayTalleres();
        this._talleres.forEach((objTaller) => {
            this.addTaller(objTaller);
        });
        if (localStorage.getItem('talleres') != null && this._talleres.length > 0) {
            if (idTallerToShowItsParticipantes === null) {
                this._tablePart._actualizar(this._talleres[0].ID);
            } else {
                this._tablePart._actualizar(idTallerToShowItsParticipantes);
            }
        }
    }

    addTaller(objTaller) {
        let row = this._table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = objTaller.ID;
        cell = row.insertCell(1);
        cell.innerHTML = objTaller.name;
        cell = row.insertCell(2);
        cell.innerHTML = objTaller.stringInitDate;
        cell = row.insertCell(3);
        cell.innerHTML = objTaller.stringFinDate;
        cell = row.insertCell(4);
        cell.innerHTML = objTaller.placesDis;
        cell = row.insertCell(5);
        cell.innerHTML = objTaller.partRegist;
        cell = row.insertCell(6);
        cell.innerHTML = objTaller.duracionTa;
        this._addBtnAddParticipanteAndBtnShowParticipantes(row, objTaller);
    }

    _actualizarArrayTalleres() {
        if (localStorage.getItem('talleres') != null) {
            this._talleres = JSON.parse(localStorage.getItem('talleres'));
        }
    }

    _addBtnAddParticipanteAndBtnShowParticipantes(row, taller) {
        
        row.insertCell(7);
        row.cells[7].appendChild(btnAddParticipante);
        row.insertCell(8);
        row.cells[8].appendChild(btnShowParticipantes);
        row.insertCell(9);
        row.cells[9].appendChild(btnDeleteTaller);
        
        let btnAddParticipante = document.createElement("input");
        btnAddParticipante.type = "button";
        btnAddParticipante.value = 'Añadir Participante';
        btnAddParticipante.className = 'btn btn-success';
        btnAddParticipante.setAttribute('data-toggle', 'modal');
        btnAddParticipante.setAttribute('data-target', '#dialogo1');
        btnAddParticipante.addEventListener('click', () => {
            localStorage.setItem('tallerActive', taller.ID);
        });

        let btnShowParticipantes = document.createElement("input");
        btnShowParticipantes.type = "button";
        btnShowParticipantes.value = 'Ver participantes';
        btnShowParticipantes.className = 'btn btn-primary';
        btnShowParticipantes.addEventListener('click', () => {
            this._tablePart._actualizar(taller.ID);
        });

        let btnDeleteTaller = document.createElement("input");
        btnDeleteTaller.type = "button";
        btnDeleteTaller.value = 'Eliminar';
        btnDeleteTaller.className = 'btn btn-danger';
        btnDeleteTaller.addEventListener('click', () => {
            this._deleteTaller(taller.ID);
        });

        this._tablePart._actualizar(taller.ID);
    }

    _deleteTaller(ID) {
        this._actualizarArrayTaller();
        this._talleres.forEach((objTaller, indexTaller) => {
            if (objTaller.ID === ID) {
                if (objTaller.partRegist === 0) {
                    this._talleres.splice(indexTaller, 1);
                    localStorage.setItem('talleres', JSON.stringify(this._talleres));
                    this._actualizar(null);
                    swal.fire({
                        type: 'success',
                        title: 'Taller eliminado',
                    })
                } else {
                    swal.fire({
                        type: 'warning',
                        title: 'Advertencia',
                        text: 'No se puede eliminar el taller porque hay participantes inscritos'
                    })
                }
                return;
            }
        });
    }

    isPlacesDis(idTaller) {
        let isPlacesDis = false;
        this._talleres.forEach((objTaller) => {
            if (Number(objTaller.ID) == idTaller && objTaller.placesDis > objTaller.partRegist) {
                isPlacesDis = true;
                return;
            }
        });
        return isPlacesDis;
    }

    _unicoEmail(idTaller, email) {
        let isUniqueEmail = true;
        this._talleres.forEach((objTaller) => {
            if (Number(objTaller.ID) == idTaller) {
                objTaller.participantes.forEach((objParticipante) => {
                    if (objParticipante.email === email) {
                        isUniqueEmail = false;
                        return;
                    }
                });
                return;
            }
        });
        return isUniqueEmail;
    }

    _showInTable() {

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
    }
    //Fin metodo _showInTable

}