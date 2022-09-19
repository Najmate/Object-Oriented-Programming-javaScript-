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
console.log('\n----Ficha do paciente: 23----\n');
console.log("O nome: ".concat(namee));
console.log("Idade: ".concat(age));
console.log("Data de nascimento: ".concat(birthDate));
console.log("Tipo sangu\u00EDneo: ".concat(bloodType));
console.log("Telefone de contato: ".concat(telContact));
