
// Задание 1
const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

// gmailButton.addEventListener("click",()=> {
//     return console.log("You clicked me")
// })    ниже вариант покороче


const regExp = /@gmail.com/

gmailButton.onclick = () => {
if(regExp.test(gmailInput.value)){
    gmailResult.innerHTML = "You entered gmail address"
    gmailResult.style.color = "green"
}else{
    gmailResult.innerHTML = "You entered not Gmail address"
    gmailResult.style.color = "red"
}
}

//Задание 2

const childBlock = document.querySelector('.child_block')

let positionX = 0

const handleBlockMove = () => {
    if (positionX <= 440){
        positionX += 16
        childBlock.style.left = `${positionX}px`
        setTimeout(handleBlockMove,100)
    }
}
handleBlockMove()


// const childBlock = document.querySelector(".child_block")
//
// const childBlock = /450 px/
// childBlock.onclick = () => {
//     if (childBlock.test())
// }

// let childBlock  = 0
//
// const count = () => {
//     childBlock++
//     console.log(childBlock)
//     if(childBlock < 450)
//     count()
// }
// count()