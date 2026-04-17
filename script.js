let container = document.querySelector("main")
let button = document.querySelector("button")
let heading = document.querySelector('h1')
let colorName = document.querySelector('.colorName')


button.addEventListener("click", function () {
    // console.log("hey buton is clicked")
    // console.log(Math.floor(Math.random() * 10) + 1)

    let red = Math.floor((Math.random() * 255 ) + 1 )
    let green = Math.floor((Math.random() * 255 ) + 1 )
    let blue = Math.floor((Math.random() * 255 ) + 1 )


    // rgb(198, 186, 209);
    let color = `rgb(${red}, ${green}, ${blue} )`
    // console.log(color)

    if(color == "rgb(0, 0, 0 )"){
        container.style.backgroundColor = color;
        heading.style.color = "white"
        heading.style.backgroundColor = " rgba(245, 222, 179, 0.145)"
        
    }else{
    container.style.backgroundColor = color;
    colorName.innerText = color
    colorName.style.color = "black"

    }
}
)