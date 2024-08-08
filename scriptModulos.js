import Consultorio from "./consultorio.js";
import Paciente from "./paciente.js";

const consultorio = new Consultorio('PP');
const pacienteUno = new Paciente('Felipe', 30, '11111111-1', 'Sano');
const pacienteDos = new Paciente('Juan', 30, '22222222-1', 'Sano');
const pacienteTres = new Paciente('Francisca', 30, '22222222-1', 'Sano');
consultorio.agregarPaciente(pacienteUno);
consultorio.agregarPaciente(pacienteDos);
consultorio.agregarPaciente(pacienteTres);
console.log(consultorio);
