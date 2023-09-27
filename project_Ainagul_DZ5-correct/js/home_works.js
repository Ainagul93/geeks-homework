
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
let positionY = 0

const handleBlockMove = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(handleBlockMove, 1)
    }else if (positionX >= 448 && positionY < 448){
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(handleBlockMove, 1)
    }else if (positionX > 0 && positionY > 0){
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(handleBlockMove, 1)
    }else if(positionX === 0 && positionY > 0 ){
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(handleBlockMove, 1)
    }
}
handleBlockMove()

// Home Work 2

const seconds = document.querySelector("#secondsS")
const btnStart = document.querySelector("#start")
const btnStop = document.querySelector("#stop")
const btnReset = document.querySelector("#reset")
let counter = 0;
let intervalId;

function incrementCounter() {
    counter++;
    seconds.textContent = counter;
}

btnStart.addEventListener("click", ()=> {
     clearInterval(intervalId)
    intervalId = setInterval(incrementCounter, 1000);
})

btnStop.onclick = () => {
    clearInterval(intervalId);
};

btnReset.onclick = () => {
    clearInterval(intervalId);
    counter = 0;
    seconds.textContent = counter;
};





