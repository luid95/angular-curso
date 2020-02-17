"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(valor) {
        console.log("Iniciando calculadora...");
        this.numero = valor;
    }
    Calculadora.prototype.sumar = function () {
        return this.numero + this.numero;
    };
    return Calculadora;
}());
var calA = new Calculadora(5);
console.log(calA.sumar());
var calB = new Calculadora(10);
console.log(calB.sumar());
