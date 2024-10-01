const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit;
let celcius


const swap = () => {
    if(one.textContent === '℃'){
        one.textContent = '℉'
        two.textContent = '℃'
    } else{
        two.textContent = '℉'
        one.textContent = '℃'
    }
    result.textContent = '';
}


const reset = () => {
    converter.value = ''
    result.textContent = ''
}

const celtoFahr = () => {
    celcius = (converter.value - 32) / 1.8;
    result.textContent = `${converter.value}℉ to ${celcius.toFixed(1)}℃`
    converter.value =''
 }

const fahrToCel = () => {
    fahrenheit = (converter.value = 32) * 1.8 
}

const conversion = () => {
    if(converter.value !== ''){
        if(one.textContent === '℃') fahrToCel();
        else celtoFahr();
        
    }else{
        result.textContent = 'Musisz podać jakąś wartość!'
    }
}

changeBtn.addEventListener('click', swap)
resetBtn.addEventListener('click', reset)
convBtn.addEventListener('click', conversion)