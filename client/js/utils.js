import {svgEmail, svgFb, svgOther, svgPhone, svgVk} from "./svg.js";

export const createContactLink = (type, value, element, svg, item) => {
    element = document.createElement('a')
    element.classList.add('contacts__link')
    element.innerHTML = svg

    if (type === 'Email') {
        element.href = `mailto:${value}`
    } else if (type === 'Телефон') {
        element.href = `tel:${value}`
    } else {
        element.href = value.trim()
    }

    item.append(element)
}

export const createContactItemByType = (type, value, item) => {
    switch (type) {
        case 'Телефон':
            let phone;
            createContactLink(type, value, phone, svgPhone, item)
            break
        case 'Email':
            let email;
            createContactLink(type, value, email, svgEmail, item)
            break
        case 'Facebook':
            let facebook;
            createContactLink(type, value, facebook, svgFb, item)
            break
        case 'VK':
            let vk;
            createContactLink(type, value, vk, svgVk, item)
            break
        case 'Other':
            let other;
            createContactLink(type, value, other, svgOther, item)
            break
        default:
            break;
    }
}

export const formatDate = (data) => {
    const newDate = new Date(data);

    const correctDate = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }
    return newDate.toLocaleString('ru', correctDate)
}

export const formatTime = (data) => {
    const newDate = new Date(data);

    const correctDate = {
        hour: 'numeric',
        minute: 'numeric',
    }
    return newDate.toLocaleString('ru', correctDate)
}