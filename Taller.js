export default class Taller {
    constructor(taller) {
      this._tallerName = taller.tallerName;
      this._initDate = taller.initDate;
      this._finDate = taller.finDate;
      this._placesDis = taller.placesDis;
      this._duracionTa = taller.duracionTa;

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
   
}