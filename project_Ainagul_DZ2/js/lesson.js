//PHONE VALIDATOR

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

phoneButton.addEventListener("click", ()=>{
    return console.log("You clicked me")
})

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    }else{
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"

    }

}


// RECURSION - рекурсия

let num = 0
const count = () => {
    num++
    console.log(num)
    if(num<500)
    count()
}
count()