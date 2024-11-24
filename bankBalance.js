
var prompt = require("prompt-sync")()


function calculateBalances(inicial, depósitos, retiros) {
    let saldoFinal = inicial + depósitos - retiros;
    return saldoFinal;
}


let saldoInicial = 20000; // Saldo inicial
let depósitos = 5000;      // Total de depósitos
let retiros = 10000;       // Total de retiros
let nombre = prompt("¿cual es tu nombre? ",null)
let apellido = prompt("¿cual es tu apellido? ", null)
let saldoFinal = calculateBalances(saldoInicial, depósitos, retiros);
function bankBalance(nombre, apellido, saldoFinal ){
    let user = nombre + " " + apellido;
    return user
    console.log("Estimad@ " + user)
    console.log("el monto total de los depoósitos es de :$" + depósitos)
    console.log("el monto total de los retiros es de :$" + retiros)
    console.log("Por lo tanto, su saldo actual en la cuenta es de: $" + saldoFinal);
}

module.exports = bankBalance
