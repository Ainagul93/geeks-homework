const modal = document.querySelector(`.modal`)
const modalTrigger = document.querySelector(`#btn-get`)
const closeModalButton = document.querySelector(`.modal_close`)
const footer=document.querySelector(`.footer`)

const openModal = () =>{
    modal.style.display = `block`
    document.body.style.overflow = `hidden`
}

const closeModal = () => {
    modal.style.display = `none`
    document.body.style.overflow = ``
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) =>{
    if(event.target === modal){
        closeModal()
    }

}



const hideModal = () => {
    openModal()
    window.removeEventListener(`scroll`, footerScroll)
}

const footerScroll = ()=> {
    if(window.scrollY + window.innerHeight >= footer.offsetTop){
        autoModal()
    }
}
let modalOpen = false;

const autoModal = () => {
    if(!modalOpen){
        modalOpen=true
        openModal()
        window.removeEventListener(`scroll`,footerScroll)
    }

}


window.addEventListener(`scroll`,footerScroll)
setTimeout(autoModal,10000)
