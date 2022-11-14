// function ganti warna violet
const btnWarnaViolet = document.querySelector ('.GantiWarna')
function gantiWarna(){
    document.body.classList.toggle('ganti-warna')
    document.body.removeAttribute('style')
}
btnWarnaViolet.onclick = gantiWarna

// function ganti warna random
const sectionBtn = document.getElementById('btn')
const btnBaru = document.createElement('button')
const textBtnBaru = document.createTextNode('Ganti Warna Random')
btnBaru.append(textBtnBaru)
btnWarnaViolet.before(btnBaru)

btnBaru.addEventListener('click', function(){
    const red = Math.floor(Math.random() *250 -1)
    const green = Math.floor(Math.random() *250 -1)
    const blue = Math.floor(Math.random() *250 -1)
    document.body.style.backgroundColor = (`rgb(${red},${green},${blue})`)
})

// function color input text warna
const inputColor = document.querySelector('#color')
const textH1 = document.querySelector('h1')
inputColor.addEventListener('input', () => {
    textH1.style.color = inputColor.value
})

// function color range background
const rangeRed =  document.querySelector('#rangeRed')
const rangeGreen =  document.querySelector('#rangeGreen')
const rangeBlue =  document.querySelector('#rangeBlue')
const textRed = document.getElementById('textRed')
const textGreen = document.getElementById('textGreen')
const textBlue = document.getElementById('textBlue')

rangeRed.addEventListener('input', () =>{
    textRed.innerHTML = rangeRed.value
    document.body.style.backgroundColor = (`rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`)
})

rangeGreen.addEventListener('input', () =>{
    textGreen.innerHTML = rangeGreen.value
    document.body.style.backgroundColor = (`rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`)
})

rangeBlue.addEventListener('input', () =>{
    textBlue.innerHTML = rangeBlue.value
    document.body.style.backgroundColor = (`rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`)
})

// function mousemove
document.body.addEventListener('mousemove', function(e){
    const red = Math.floor((e.clientX/window.innerWidth) * 255)
    const green = Math.floor((e.clientY/window.innerHeight) * 255)
    document.body.style.backgroundColor = `rgb(${red},${green},255)`
})
