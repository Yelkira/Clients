import {svgDelete} from "./svg.js";

export const createContactItem = () => {
    const contact = document.createElement('div')
    const contactType = document.createElement('div')
    const contactName = document.createElement('button')
    const contactList = document.createElement('ul')
    const contactPhone = document.createElement('li')
    const contactVK = document.createElement('li')
    const contactFB = document.createElement('li')
    const contactEmail = document.createElement('li')
    const contactOther = document.createElement('li')
    const contactInput = document.createElement('input')
    const contactDelete = document.createElement('button')
    const contactDeleteTooltip = document.createElement('span')

    contact.classList.add('contact');
    contactDeleteTooltip.classList.add('contact-tooltip', 'site-tooltip');
    contactType.classList.add('contact__type');
    contactName.classList.add('contact__name');
    contactList.classList.add('contact__list', 'list-reset');
    contactPhone.classList.add('contact__item');
    contactEmail.classList.add('contact__item');
    contactVK.classList.add('contact__item');
    contactFB.classList.add('contact__item');
    contactOther.classList.add('contact__item');
    contactInput.classList.add('contact__input');
    contactDelete.classList.add('contact__delete', 'btn-reset');

    contactName.textContent = 'Телефон';
    contactDeleteTooltip.textContent = 'Удалить контакт';
    contactPhone.textContent = 'Телефон';
    contactVK.textContent = 'VK';
    contactFB.textContent = 'Facebook';
    contactEmail.textContent = 'Email';
    contactOther.textContent = 'Другое';
    contactInput.placeholder = 'Введите данные котакта';
    contactInput.type = 'text';
    contactDelete.innerHTML = svgDelete

    contactDelete.append(contactDeleteTooltip)
    contact.append(contactType, contactInput, contactDelete);
    contactType.append(contactName, contactList)
    contactList.append(contactPhone, contactEmail, contactVK, contactFB, contactOther)

    return {
        contact,
        contactName,
        contactInput,
        contactDelete
    }
}