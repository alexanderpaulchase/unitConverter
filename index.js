/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// variables 
const unitInput = document.getElementById("unit-input")
const convertBtn = document.getElementById("btn-convert")
const len = document.getElementById("meter-feet")
const vol = document.getElementById("liter-gallon")
const mass = document.getElementById("kilo-pound")

// eventListener on button calls the convert function
convertBtn.addEventListener('click', () => {
    convertUnit() 
})

// converting function
function convertUnit(){
    let inputValue = Number(unitInput.value)
    let meterFeet = inputValue * 3.281
    let literGallon = inputValue * 0.264
    let kiloPound = inputValue * 2.204
    
    let feetMeter = inputValue * 0.304
    let gallonLiter = inputValue * 3.785
    let poundKilo = inputValue * 0.453
    
    len.textContent = `${inputValue} meters = ${meterFeet.toFixed(3)} feet | ${inputValue} feet = ${feetMeter.toFixed(3)} meters`
    
    vol.textContent = `${inputValue} liter = ${literGallon.toFixed(3)} gallons | ${inputValue} gallons = ${gallonLiter.toFixed(3)} liters`
    
    mass.textContent = `${inputValue} kilos = ${kiloPound.toFixed(3)} pounds | ${inputValue} pounds = ${poundKilo.toFixed(3)} kilos`
}