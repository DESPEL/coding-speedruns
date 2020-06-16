function changeCounterValue(delta) {
    value = parseInt(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = value + delta

}


document.getElementById('add').addEventListener('click', () => {
    changeCounterValue(1)
})

document.getElementById('minus').addEventListener('click', () => {
    changeCounterValue(-1)
})

document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('number').innerHTML = 0
})