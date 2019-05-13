export default class Taller {
    constructor(taller) {
      this._tallerName = taller.tallerName;
      this._initDate = taller.initDate;
      this._finDate = taller.finDate;
      this._placesDis = taller.placesDis;
      this._duracionTa = taller.duracionTa;
      this._months = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
      ];

    }
  
    get tallerName() {
      return this._tallerName;
    }

    get initDate() {
      return this._initDate;
    }

    get finDate() {
      return this._finDate;
    }
   
    get placesDis() {
      return this._placesDis;
    }
   
    get duracionTa() {
      return this._duracionTa;
    }

    getInitDate() {
      let date =
        this._initDate.getDate() +
        "/" +
        this._months[this._initDate.getMonth()] +
        "/" +
        this._initDate.getFullYear();
  
      return date;
    }

    getFinDate() {
      let date =
        this._finDate.getDate() +
        "/" +
        this._months[this._finDate.getMonth()] +
        "/" +
        this._finDate.getFullYear();
  
      return date;
    }

    get participants() {
      return this._participants;
  }

    get participants(participants) {
      this._participants = participants;
    }
}