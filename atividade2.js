var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());
var clients = new Client();
var namee = clients.name = 'Roberto';
var age = clients.age = 23;
var birthDate = clients.birthDate = '04/05/1998';
var bloodType = clients.bloodType = 'O-';
var telContact = clients.telContact = '(21) 1233-5678';
console.log('Ficha do paciente 23\n');
console.log("O nome: ".concat(namee));
console.log("Idade: ".concat(age));
console.log("Data de nascimento: ".concat(birthDate));
console.log("Tipo sangu\u00EDneo: ".concat(bloodType));
console.log("Telefone de contato: ".concat(telContact));
var Plane = /** @class */ (function () {
    function Plane() {
    }
    return Plane;
}());
var planes = new Plane();
var model = planes.model = '787-9 Dreamliner';
var motor = planes.motor = 'bimotor turbofans Rolls-Royce Trent 1000';
var system = planes.system = 'fly-by-wire';
var seats = planes.seats = 300;
var travelClass = planes.travelClass = '• Classe Executiva: 30\n\• premium economy: 57\n• classe econômica: 213';
console.log("Modelo: ".concat(model));
console.log("Motor: ".concat(motor));
console.log("Sistema: ".concat(system));
console.log("Assentos: ".concat(seats));
console.log("".concat(travelClass));
