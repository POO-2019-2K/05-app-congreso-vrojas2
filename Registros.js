import Taller from "./Taller.js";

export default class Registros {
  constructor(tableregisTaller) {
    this._tableregisTaller = tableregisTaller;
    this._talleres = [];
    //localStorage.removeItem(_talleres);  
    this._initTables();
  }

    _initTables() {
        let lsTalleres = JSON.parse(localStorage.getItem("talleres"));
        if(lsTalleres === null){
            return;
        }
        lsTalleres.forEach((e, index) => {
        //taller.birthday = new Date(taller.birthday);
        //taller.dateContratacion = new Date(taller.dateContratacion);
        this._showInTable(new Taller(e));

        });
    }

    _showInTable(taller) {
        let row = this._tableregisTaller.insertRow(-1);

        let cellTallerName = row.insertCell(0);
        
        cellTallerName.innerHTML = taller.tallerName;

        let objTaller = {
            tallerName: tallerName,
        }

        this._talleres.push(objTaller);
        }

    addEmployee(taller) {
        this._showInTable(taller);
        localStorage.setItem("talleres", JSON.stringify(this._talleres));
        //console.log(localStorage.getItem("talleres"));
    }
}