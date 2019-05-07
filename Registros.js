import Taller from "./Taller.js";

export default class Registros {
  constructor(tableregisTaller) {
    this._tableregisTaller = tableregisTaller;
    this._talleres = [];
    //localStorage.removeItem("talleres");
    this._initTables();
  }

    _initTables() {
        let lsTalleres = JSON.parse(localStorage.getItem("talleres"));
        if(lsTalleres === null){
            return;
        }
        lsTalleres.forEach((e, index) => {
        taller.initDate = new Date(taller.initDate);
        taller.finDate = new Date(taller.finDate);
        this._showInTable(new Taller(e));

        });
    }

    _showInTable(taller) {
        let row = this._tableregisTaller.insertRow(-1);

        let cellTallerName = row.insertCell(0);
        let cellInitDate = row.insertCell(1);
        let cellFinDate = row.insertCell(2);
        
        cellTallerName.innerHTML = taller.tallerName;
        cellInitDate.innerHTML = taller.getInitDate();
        cellFinDate.innerHTML = taller.getFinDate();

        let objTaller = {
            tallerName: taller.tallerName,
            initDate: taller.initDate,
            fechaTermino: taller.fechaTermino
        }

        this._talleres.push(objTaller);
        }

    addEmployee(taller) {
        this._showInTable(taller);
        localStorage.setItem("talleres", JSON.stringify(this._talleres));
        //console.log(localStorage.getItem("talleres"));
    }
}