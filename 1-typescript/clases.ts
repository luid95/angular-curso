class Calculadora{
    numero:number;

    constructor(valor:number){
        console.log("Iniciando calculadora...");
        this.numero = valor;
    }

    sumar(){
        return this.numero + this.numero;
    }
}

let calA = new Calculadora(5);

console.log(calA.sumar());

let calB = new Calculadora(10);

console.log(calB.sumar());
