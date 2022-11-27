"use strict";
var StatusStudents;
(function (StatusStudents) {
    StatusStudents[StatusStudents["aprovado"] = 10] = "aprovado";
    StatusStudents[StatusStudents["recuperacao"] = 11] = "recuperacao";
    StatusStudents[StatusStudents["reprovado"] = 12] = "reprovado";
    StatusStudents[StatusStudents["reavalia"] = 13] = "reavalia";
})(StatusStudents || (StatusStudents = {}));
console.log(StatusStudents.aprovado);
console.log(StatusStudents.recuperacao);
console.log(StatusStudents.reprovado);
console.log(StatusStudents.reavalia);
// enum e enumerados ele troca a const pelo enum, assim fica mais rapido e e suportado reconhecido por outras linguagens sentido perfomatico, usado em programacao orientada a objeto
