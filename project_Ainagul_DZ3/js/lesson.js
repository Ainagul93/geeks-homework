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
//
// let num = 0
// const count = () => {
//     num++
//     console.log(num)
//     if(num<500)
//     count()
// }
// count()


// TAB SLIDER



const tabContent = document.querySelectorAll(`.tab_content_block`)
const tabsParent = document.querySelector(`.tab_content_items`)
const tabs = document.querySelectorAll(`.tab_content_item`)

let currentTab = 0

const hideTabContent = () => {
    tabContent.forEach((item)=>{
        item.style.display = `none`
    })
    tabs.forEach((item)=>{
        item.classList.remove(`tab_content_item_active`)
    })
}

const showTabContent = (i=0) => {
    tabContent[i].style.display=`block`
    tabs[i].classList.add(`tab_content_item_active`)
}


const slideCards = () => {
    hideTabContent()
    currentTab=(currentTab+1) % tabs.length
    showTabContent(currentTab)

}

hideTabContent()
showTabContent()

tabsParent.onclick=(event)=>{
    if(event.target.classList.contains(`tab_content_item`)){
        tabs.forEach((item,i)=>{
            if(event.target===item){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

setInterval(slideCards,3000)


