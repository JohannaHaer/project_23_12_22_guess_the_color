let rgbCode = document.querySelector("#rgbCode")

let color = Array.from(document.querySelectorAll("#color"))
console.log(color);
console.log(color.length);

let colorValue = Math.round(0xfffff * Math.random())
    let r = colorValue >> 16
    let g = colorValue >> 8 & 255
    let b = colorValue & 255
    let colorTest = [r, g, b]

let randomRGB = () => {
    rgbCode.innerHTML = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

randomRGB()


for (let i = 0; i < color.length; i++) {
    colorValue = Math.round(0xfffff * Math.random())
    r = colorValue >> 16
    g = colorValue >> 8 & 255
    b = colorValue & 255
    colorTest = [r, g, b]
    color[i].style.backgroundColor = `rgb(${r}, ${g}, ${b}) `
}

console.log(colorTest);