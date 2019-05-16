import RegisTaller from './Registros.js';

export default class Main {
    constructor() {
        this._talleres = new Array();
        if (localStorage.getItem('talleres') != null) {
            this._talleres = JSON.parse(localStorage.getItem('talleres'));
        }

        let regisTaller = new RegisTaller(document.querySelector('#regisTaller'),
        document.querySelector('#tablePart'), null);

        document.querySelector('#btnAddTa').addEventListener('click', () => {
            if (document.querySelector('#form').checkValidity()) {
                if (!(this._IDRegister(Number(document.querySelector('#idTaller').value)))) {
                    let objTaller = this._crearObjTaller();
                    this._talleres.push(objTaller);
                    localStorage.setItem('talleres', JSON.stringify(this._talleres));
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
        let stringInitDate = new Date(document.querySelector('#initDate').value);
        stringInitDate = (stringInitDate.getDate() + 1) + '/' +
        (stringInitDate.getMonth() + 1) + '/' + stringInitDate.getFullYear();
        let stringFinDate = new Date(document.querySelector('#finDate').value);
        stringFinDate = (stringFinDate.getDate() + 1) + '/' +
        (stringFinDate.getMonth() + 1) + '/' + stringFinDate.getFullYear();

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