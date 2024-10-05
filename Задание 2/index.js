let horsepowers = prompt("Введите мощность авто в лошадиных силах:")
let rate = 0

if (horsepowers < 100) {
    rate = 12;
} else if (100 <= horsepowers && horsepowers < 125) {
    rate = 25;
} else if (125 <= horsepowers && horsepowers < 150) {
    rate = 35;
} else if (150 <= horsepowers && horsepowers < 175) {
    rate = 45;
} else if (175 <= horsepowers && horsepowers < 200) {
    rate = 50;
} else if (200 <= horsepowers && horsepowers < 225) {
    rate = 65;
} else if (225 <= horsepowers && horsepowers < 250) {
    rate = 75;
} else {
    rate = 150;
}

console.log("Сумма налога:", horsepowers * rate);