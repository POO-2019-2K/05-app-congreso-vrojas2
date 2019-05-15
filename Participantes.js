export default class Participantes {
    constructor(participant) {
        this._partName = participant.partName;
        this._email = participant.email;
        this._birthday = participant.birthday;
        this._id = participant.id;
        
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

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }
}