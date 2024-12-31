const currentBalance = 100;
const depositAmount = 100;
const withdrawalAmount = 100;

function deposit(depositAmount) {
    let newBalance = currentBalance + depositAmount;
    console.log(newBalance);
}

function withdraw(withdrawalAmount) {
    if (withdrawalAmount <= currentBalance) {
        let newBalance = currentBalance - withdrawalAmount;
        console.log(newBalance);
    }
    else {
        console.log("You don't have enough funds to withdraw.")
    }
}

function balance(currentBalance) {
    console.log(currentBalance);
}

const depositTotal = deposit(currentBalance, depositAmount);
console.log(depositTotal)

const withdrawalTotal = withdraw(currentBalance, withdrawalAmount);
console.log(withdrawalTotal)

const balanceTotal = balance(currentBalance, depositAmount, withdrawalAmount);
console.log(balanceTotal)