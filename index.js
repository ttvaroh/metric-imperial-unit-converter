/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const themeSwitch = document.getElementById('theme-switch')
const convert = document.getElementById('convert-btn')
const input = document.getElementById('input-el')
const length = document.getElementById('length-el')
const volume = document.getElementById('volume-el')
const mass = document.getElementById('mass-el')
const body = document.getElementById('body')

if (!(localStorage.getItem('theme-switch'))) localStorage.setItem('theme-switch', JSON.stringify(false))

convert.addEventListener('click', () => {
    updateConversions();
})

themeSwitch.addEventListener('click', () => {
    updateTheme();
})

function updateConversions() {
    let amount = input.value
    let length_str = `${amount} meters = ${m_to_ft(amount)} feet | ${amount} feet = ${ft_to_m(amount)} meters`
    let volume_str = `${amount} liters = ${l_to_g(amount)} gallons | ${amount} gallons = ${g_to_l(amount)} liters`
    let mass_str = `${amount} kilos = ${kg_to_lb(amount)} pounds | ${amount} pounds = ${lb_to_kg(amount)} kilos`
    length.innerHTML = length_str
    volume.innerHTML = volume_str
    mass.innerHTML = mass_str
}

function updateTheme() {
    let darkTheme = (!JSON.parse(localStorage.getItem('theme-switch')))
    localStorage.setItem('theme-switch', JSON.stringify(darkTheme))
    if (darkTheme) body.classList.add('dark')
    else body.classList.remove('dark')
}

// helper functions: 
function m_to_ft (meters) {
    return (meters * 3.281).toFixed(3)
}

function ft_to_m (feet) {
    return (feet / 3.281).toFixed(3)
}

function l_to_g (liters) {
    return (liters * .0264).toFixed(3)
}

function g_to_l (gallons) {
    return (gallons / .0264).toFixed(3)
}

function kg_to_lb (kilograms) {
    return (kilograms * 2.204).toFixed(3)
}

function lb_to_kg (pounds) {
    return (pounds / 2.204).toFixed(3)
}

updateConversions();