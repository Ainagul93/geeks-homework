const modal = document.querySelector(`.modal`)
const modalTrigger = document.querySelector(`#btn-get`)
const closeModalButton = document.querySelector(`.modal_close`)
const footer = document.querySelector('.footer')



let modalOpened = false;
let scrollHandlerActive = true;

const openModal = () => {
    modal.style.display = `block`
    document.body.style.overflow = `hidden`
}

const closeModal = () => {
    modal.style.display = `none`
    document.body.style.overflow = ``
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()


modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }

}

hideModal = () => {
    openModal()
    window.removeEventListener("scroll", footerScroll);
}

footerScroll = () => {
    if (window.scrollY + window.innerHeight >= footer.offsetTop) {
        autoModal();
    }
}




const autoModal = () => {
    if (!modalOpened) {
        modalOpened = true;
        openModal()
        window.removeEventListener("scroll", footerScroll);
    }
}

window.addEventListener("scroll", footerScroll);
setTimeout(autoModal, 10000);