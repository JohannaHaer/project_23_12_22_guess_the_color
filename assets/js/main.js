let rgbCode = document.querySelector("#rgbCode")
// let rgbCodeValue = document.querySelector("#rgbCode").value
let output = document.querySelector("#output")
let color = Array.from(document.querySelectorAll("#color"))

console.log(color[0]);
console.log(color.length);

let random = Math.round(Math.random() * (color.length -1))
console.log("random", random);

let randomRGB = () => {
    for (let i = 0; i < color.length; i++) {
        r = Math.round(Math.random() * 255) + 1
        g = Math.round(Math.random() * 255) + 1
        b = Math.round(Math.random() * 255) + 1

        let rgb = `rgb(${r}, ${g}, ${b}) `

        color[i].style.backgroundColor = rgb
        if (i === random) {
            rgbCode.innerHTML = rgb
        }
        color[i].addEventListener("click", () => {
            if (random === color.indexOf(event.target)) {
                output.innerHTML = "richtig"
            } else {
                output.innerHTML = "falsch"
            }
        })
    }
        // console.log(color[0]);
        // console.log(color[1]);
        // console.log(color[2]);
        // console.log(color[3]);
        // console.log(color[4]);
}

randomRGB()


let reset = () => {
    output.innerHTML = ""
    randomRGB()
}




