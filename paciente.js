export default class Paciente{

    constructor(nombre, edad, rut, diagnostico){
        this._nombre = nombre;
        this._edad = edad;
        this._rut = rut;
        this._diagnostico = diagnostico;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    get rut(){
        return this._rut;
    }

    set rut(rut){
        this._rut = rut;
    }

    get diagnostico(){
        return this._diagnostico;
    }

    set diagnostico(diagnostico){
        this._diagnostico = diagnostico;
    }

}