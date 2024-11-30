/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet = 3.281;
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function () {
    const baseValue = inputEl.value;
    lengthEl.innerHTML = `
        <p>${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet</p>
        `
    volumeEl.innerHTML = `
        <p>${baseValue} liters = ${(baseValue / literToGallon).toFixed(3)} gallons</p>
        `
    massEl.innerHTML = `
        <p>${baseValue} kilograms = ${(baseValue / kiloToPound).toFixed(3)} pounds</p>
    `
})





