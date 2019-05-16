import RegisTaller from './Registros.js';

export default class Main {
    constructor() {
        this._talleres = new Array();
        if (localStorage.getItem('talleres') != null) {
            this._talleres = JSON.parse(localStorage.getItem('talleres'));
        }

        let regisTaller = new RegisTaller(document.querySelector('#regisTaller'), document.querySelector('#tablePart'), null);

        document.querySelector('#btnAddTa').addEventListener('click', () => {
            if (document.querySelector('#form').checkValidity()) {
                //The ID already exist?                
                if (!(this._IDRegister(Number(document.querySelector('#idTaller').value)))) {
                    //Create object
                    let objTaller = this._crearObjTaller();
                    //Add and save in LocalStorange
                    this._talleres.push(objTaller);
                    localStorage.setItem('talleres', JSON.stringify(this._talleres));
                    //Show in table
                    regisTaller.addTaller(objTaller);
                } else {
                    swal.fire({
                        type: 'warning',
                        title: 'Advertencia',
                        text: 'El ID ya se registro antes, ingrese otro'
                    })
                }
            }
            else {
                swal.fire({
                    type: 'warning',
                    title: 'Advertencia',
                    text: 'Datos incompletos'
                })
            }
        });
    }

    _crearObjTaller() {
        //Format dates
        let stringInitDate = new Date(document.querySelector('#initDate').value);
        stringInitDate = (stringInitDate.getDate() + 1) + '/' +
        (stringInitDate.getMonth() + 1) + '/' + stringInitDate.getFullYear();

        let stringFinDate = new Date(document.querySelector('#finDate').value);
        stringFinDate = (stringFinDate.getDate() + 1) + '/' +
        (stringFinDate.getMonth() + 1) + '/' + stringFinDate.getFullYear();

        //Create object
        let objTaller = {
            ID: Number(document.querySelector('#idTaller').value),
            name: document.querySelector('#tallerName').value,
            stringInitDate: stringInitDate,
            stringFinDate: stringFinDate,
            placesDis: Number(document.querySelector('#placesDis').value),
            partRegist: 0,
            duracionTa: Number(document.querySelector('#duracionTa').value),
            participantes: new Array()
        }

        return objTaller;
    }

    _IDRegister(ID) {
        let IsIDRegister = false;
        this._talleres.forEach((objTaller) => {
            if (Number(objTaller.ID) == ID) {
                IsIDRegister = true;
                return;
            }
        });
        return IsIDRegister;
    }
}


let main = new Main();