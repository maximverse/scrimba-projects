/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/  

// convert

const meterFeetEl = document.getElementById('meter-feet') 
const litersGallonsEl = document.getElementById('liters-gallons') 
const kilogramsPoundsEl = document.getElementById('kilograms-pounds') 

const inputEl = document.getElementById('input')

meterFeetEl.textContent = ''
litersGallonsEl.textContent = ''
kilogramsPoundsEl.textContent = ''

function convert() {
    let num = inputEl.value;
    let numFeet = null;
    // meters
    let feet = num * 3.281;
    let meters = num / 3.281;
    meterFeetEl.textContent = `${num} meters = ${feet.toFixed(3)} feet | ${num} feet = ${meters.toFixed(3)}`
    
    // volume
    
    let gallons = num * 0.264;
    let liters = num / 0.264;
    
    litersGallonsEl.textContent = `${num} liters = ${gallons.toFixed(3)} gallons | ${num} gallons = ${liters.toFixed(3)} liters` 
    
    // mass
    
    let pounds = num * 2.204;
    let kilos = num / 2.204;
    
    kilogramsPoundsEl.textContent = `${num} pounds = ${pounds.toFixed(3)} gallons | ${num} gallons = ${kilos.toFixed(3)} kilos` 
    
       
    
    
}