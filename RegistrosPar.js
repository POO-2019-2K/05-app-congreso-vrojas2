export default class TablePart {
    constructor(table, regisTaller) {
        this._table = table;
        this._regisTaller = regisTaller;
        this._talleres = new Array();
    }

    initTable(idTaller) {
        this._actualizarArrayTalleres();
        this._talleres.forEach((objTaller) => {
            if (objTaller.ID === idTaller) {
                if (objTaller.participantes != null) {
                    objTaller.participantes.forEach((participante) => {
                        this._addParticipante(objTaller.ID, participante);
                    });
                } else {
                    return;
                }
            }
        });
    }
    
    _actualizarArrayTalleres() {
        if (localStorage.getItem('talleres') != null) {
            this._talleres = JSON.parse(localStorage.getItem('talleres'));
        }
    }
    
    _addParticipante(idTaller, participante) {
        let row = this._table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = participante.name;
        cell = row.insertCell(1);
        cell.innerHTML = participante.email;
        cell = row.insertCell(2);
        cell.innerHTML = participante.birthday;
        cell = row.insertCell(3);
        cell.appendChild(btnDeleteParticipante);

        let btnDeleteParticipante = document.createElement("input");
        btnDeleteParticipante.type = "button";
        btnDeleteParticipante.value = 'Eliminar';
        btnDeleteParticipante.className = 'btn btn-danger';
        btnDeleteParticipante.addEventListener('click', () => {
            this._deleteParticipante(idTaller, participante.email);
        });
    }

    _deleteParticipante(idTaller, email) {
        this._actualizarArrayTalleres();
        let indexParticipante = -1;
        this._talleres.forEach((objTaller, indexTaller) => {
            if (objTaller.ID === idTaller) {
                objTaller.participantes.forEach((objParticipante, index) => {
                    if (objParticipante.email === email) {
                        indexParticipante = index;
                        return;
                    }
                });
                objTaller.partRegist--;
                objTaller.participantes.splice(indexParticipante, 1);
                this._talleres.splice(indexTaller, 1, objTaller);
                return;
            }
        });
        localStorage.setItem('talleres', JSON.stringify(this._talleres));
        this._regisTaller._actualizar(idTaller);
    }

    _actualizar(idTaller) {
        for (let i = this._table.rows.length - 1; i > 1; i--) {
            this._table.deleteRow(i);
        }
        this.initTable(idTaller);
    }

}