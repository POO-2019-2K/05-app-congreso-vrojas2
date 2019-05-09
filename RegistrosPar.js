import Participante from "./Participantes.js";

export default class AgendaPar {
    constructor(tablaAgendaPar) {
        this._tablaAgendaPar = tablaAgendaPar;
        this._participantes = [];
        this._initTables();
        
       
    }

    _initTables() {
        let participantes = JSON.parse(localStorage.getItem("participantes"));
        if(participantes === null) {
            return;
        }
        participantes.forEach((participant, index) => {
        participant.fechaNac = new Date(participant.fechaNac);
        this._showInTableP(new Participante(participant));
        });
    }
    
    _showInTableP(participant) {
        let row = this._tablaAgendaPar.insertRow(-1);

        let cellPartName = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellBirthday= row.insertCell(2);

        cellPartName.innerHTML = participant.partName;
        cellEmail.innerHTML = participant.email;
        cellBirthday.innerHTML = participant.getBirthday();

        let objParticipante = {
            partName: participant.partName,
            email: participant.correo,
            birthday: participant.birthday
        }
        this._participantes.push(objParticipante);
    }
    addParticipante(participant) {
        this._showInTableP(participant);
        localStorage.setItem("participantes", JSON.stringify(this._participantes));
    }

}