//PHONE VALIDATOR

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

phoneButton.addEventListener("click", () => {
    return console.log("You clicked me")
})

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    } else {
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

const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let currentTab = 0


const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

const slideCards = () => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabs.length
    showTabContent(currentTab)
};

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}
setInterval(slideCards, 3000);



// CONVERTER DZ-5

const som = document.querySelector(`#som`)
const usd = document.querySelector(`#usd`)
const sar = document.querySelector(`#sar`)

// const converter = (element,target,target2,isCurrency)=>{
//     element.oninput=()=>{
//         const request= new XMLHttpRequest()
//         request.open("GET","../data/converter.json")
//         request.setRequestHeader("Content-type","application/json")
//         request.send()
//         request.onload=()=>{
//             const response = JSON.parse(request.response)
//             if(isCurrency==="som"){
//                 target.value=(element.value/response.usd).toFixed(2)
//                 target2.value=(element.value/response.sar).toFixed(2)
//             }else if(isCurrency==="usd"){
//                 target.value=(element.value*response.usd).toFixed(2)
//                 target2.value=(element.value/response.sar).toFixed(2)
//             }else if(isCurrency === "sar"){
//                 target.value=(element.value*response.sar).toFixed(2)
//                 target2.value=(element.value/response.usd).toFixed(2)
//             }
//         }
//     }
// }

const converter = (element, targetUSD, targetSAR, isCurrency) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open("GET", "../data/converter.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.onload = () => {
            const response = JSON.parse(request.response);
            const somAmount = parseFloat(element.value);

            if (isCurrency === "som") {
                targetUSD.value = (somAmount / response.usd).toFixed(2);
                targetSAR.value = (somAmount / response.sar).toFixed(2);
            } else if (isCurrency === "usd") {
                targetUSD.value = (somAmount * response.usd).toFixed(2);
                targetSAR.value = (somAmount * response.usd / response.sar).toFixed(2);
            } else if (isCurrency === "sar") {
                targetUSD.value = (somAmount * response.sar / response.usd).toFixed(2);
                targetSAR.value = (somAmount * response.sar).toFixed(2);
            }
        };
    };
};

converter(som,usd,sar,"som")
converter(usd,som,sar,"usd")
converter(sar,usd,som,"sar")




