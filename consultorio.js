export default class Consultorio{

    constructor(nombre, paciente = []){
        this._nombre = nombre;
        this._paciente = paciente;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get paciente(){
        return this._paciente;
    }

    set paciente(paciente){
        this._paciente = paciente;
    }

    agregarPaciente(paciente){
        this._paciente.push(paciente)
    }

}
