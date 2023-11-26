import {createClientsForm} from "./createModalForm.js";
import {sendCLientData} from "./clientsApi.js";

export const addClientModal = () => {
    const createForm = createClientsForm()
    const modal = document.createElement('div')
    const modalContent = document.createElement('div')

    modal.classList.add('modal', 'site-modal', 'modal-active');
    modalContent.classList.add('modal__content', 'site-modal__content', 'modal-active')
    createForm.form.classList.add('add-client')

    modal.append(modalContent)
    modalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form)

    createForm.form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const contactTypes = document.querySelectorAll('.contact__name')
        const contactValues = document.querySelectorAll('.contact__input')
        let contacts = []
        let clientObject = {}
        for (let i = 0; i < contactTypes.length; i++) {
            contacts.push({
                type: contactTypes[i].innerHTML,
                value: contactValues[i].value
            })
        }

        clientObject.name = createForm.inputName.value
        clientObject.surname = createForm.inputSurname.value
        clientObject.lastName = createForm.inputLastName.value
        clientObject.contacts = contacts

        await sendCLientData(clientObject, 'POST')
    })

    createForm.modalClose.addEventListener('click', (e) => {
        modal.remove()
    })

    document.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove()
        }
    })

    return modal
}