function getRandomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}

document.getElementById('changeColor').addEventListener('click', () => {
    color = getRandomColor()

    document.getElementById('page').style.backgroundColor = color
    document.getElementById('colorName').innerText = color.toUpperCase()
})