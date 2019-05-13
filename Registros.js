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
        this.createTarget(this._actual, e.id, e.name, e.dateStart, e.dateEnd, e.hours, e.places);
      
        });
    }

    _showInTable(taller) {
        let row = this._tableregisTaller.insertRow(-1);

        let cellTallerName = row.insertCell(0);
        let cellInitDate = row.insertCell(1);
        let cellFinDate = row.insertCell(2);
        let cellPlacesDis = row.insertCell(3);
        let cellDuracionTa = row.insertCell(4);
        let cellDelete = row.insertCell(5);
        
        cellTallerName.innerHTML = taller.tallerName;
        cellInitDate.innerHTML = taller.getInitDate();
        cellFinDate.innerHTML = taller.getFinDate();
        cellPlacesDis.innerHTML = taller.placesDis;
        cellDuracionTa.innerHTML = taller.duracionTa;
        cellDelete.appendChild(btnDelete);

        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = "Eliminar";
        btnDelete.className = "btn btn-danger";
        
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