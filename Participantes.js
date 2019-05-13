export default class Participante {
    constructor(participant) {
        this._partName = participant.partName;
        this._email = participant.email;
        this._birthday = participant.birthday;
        this._id = participant.id;
        this._months = [
            "Ene", "Feb", "Mar", "Abr", "May",
            "Jun", "Jul", "Ago", "Sep", "Oct",
            "Nov", "Dic" ];
    }

    get partName() {
        return this._partName;
    }
    get email() {
        return this._email;
    }
    get birthday() {
        return this._birthday;
    }
  

    getBirthday() {
      let date =
        this._birthday.getDate() +
        "/" +
        this._months[this._birthday.getMonth()] +
        "/" +
        this._birthday.getFullYear();
  
      return date;
    }
    

}