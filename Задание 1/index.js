const hasCard = true
const availableSum = 25000
let operationSum = prompt("Введите сумму операции:")

if (hasCard && operationSum <= availableSum) {
    console.log("Операция выполняется");
} else {
    console.log("Операция отклонена");
}