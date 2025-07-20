const inputBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

inputBtn.addEventListener("click", function(){
    let num = document.getElementById("number-input")
    // console.log(num.value)

    lengthEl.innerText = `${num.value} meters = ${(num.value * 3.281.toFixed(3))} feet | ${num.value} feet = ${(num.value / 3.281).toFixed(3)} meters`
    volumeEl.innerText = `${num.value} liters = ${(num.value * 0.264).toFixed(3)} gallons | ${num.value} gallons = ${(num.value / 0.264).toFixed(3)} liters`
    massEl.innerText = `${num.value} kilos = ${(num.value * 2.204).toFixed(3)} pounds | ${num.value} pounds = ${(num.value / 2.204).toFixed(3)} kilos`

})