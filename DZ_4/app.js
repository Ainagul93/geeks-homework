

//JSON

const obj = {
    name: `Name`,
    age:0
}
//console.log(<object data="" type=""></object>)

//Глобальные .......
// JSON
// window
// document
// Object
// Array
// console


const arr = [1,2,3]
const str = 12


console.log(JSON.stringify(obj))
//  Метод stringify преврощает JS объект в JSON. А JS принимает его как string(строка)


const json = JSON.stringify(obj)
const newObject = JSON.parse(json)
console.log(newObject)

// Метод parse преврощает любой JSON или любую строку в объект

// XHR  - XML HTTP Request
// HTML - Hyper Text Markup Language
// XML  - eXtensible Markup Language - расширяемый язык разметки
// HTTP - Hyper Text Transfer Protocol - протокол передачи гипертекста.При помощи HTTP обмениваемся с данными с сервером
// HTTP зто не защищенный мост между сервером и браузером
// HTTPS-Hyper Text Transfer Protocol Secure - защищенный мост между сервером и браузером

//AJAX - Asynchronous Javascript and XML

const btn = document.querySelector(`.btn`)
const wrapper = document.querySelector(`.wrapper`)

btn.addEventListener(`click`,() =>{
    const request = new XMLHttpRequest()// создание запроса
    request.open('GET','data.json') // обявление метода запроса и указание пути
    request.setRequestHeader('Content-type','application/json')// указание заголовка
    request.send()// отправка запроса

    console.log(request.response)
    request.addEventListener(`load`,()=>{
        console.log(request.response)
        const data = JSON.parse(request.response)
        console.log(data)

        data.map((item)=>{
            const card = document.createElement(`div`)
            const name = document.createElement(`p`)
            const age = document.createElement(`p`)
            const nationality = document.createElement(`p`)
            card.classList.add(`card`)

            name.textContent=item.name
            age.textContent=item.age
            nationality.textContent=item.nationality
            card.append(name,age,nationality)
            wrapper.append(card)
        })
    })
})
// btn.addEventListener(`click`,() =>{  // раньше писали с xhr
//     const xhr = new XMLHttpRequest()// создание запроса
//     xhr.open('GET','data.json') // обявление метода запроса и указание пути
//     xhr.setRequestHeader('Content-type','application/json')// указание заголовка
//     xhr.send()// отправка запроса
// })

