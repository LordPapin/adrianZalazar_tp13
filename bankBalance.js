


let operations = [500, 1000, -2000, 3000, -1000, 2000];
function calculateBalances(operations) {
    let totalDeposits = 0;
    let totalWithdrawals = 0;
    let currentBalance = 0;
  
    for (let operation of operations) {
      if (operation > 0) {
        totalDeposits += operation;
      } else {
        totalWithdrawals += Math.abs(operation);
      }
      currentBalance += operation;
    }
  
    return {
      totalDeposits,
      totalWithdrawals,
      currentBalance
    };
}

function bankBalance(name, lastName, operations) {
    let balances = calculateBalances(operations);
    return `Estimad@ ${name} ${lastName}: El monto total de los depósitos es de: $${balances.totalDeposits}. El monto total de los retiros es de: $${balances.totalWithdrawals}. Por lo tanto, su saldo actual en la cuenta es de: $${balances.currentBalance}.`;
}

console.log(bankBalance("Gloria", "Medina", operations));
console.log(bankBalance("Adrian", "Zalazar", [1000, -500, 2000, -1000]));
console.log(bankBalance("María", "González", [5000, -2000, 3000, -1000]));

module.exports = bankBalance