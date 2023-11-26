import {createContactItemByType, formatDate, formatTime} from "./utils.js";
import {deleteClientModal} from "./createDeleteModal.js";
import {editClientModal} from "./editClient.js";
import {svgSpinner} from "./svg.js";

export const createClientItem = (data) => {
    const clientTr = document.createElement('tr');
    const clientId = document.createElement('span');
    const clientIdTd = document.createElement('td');
    const clientFullName = document.createElement('td');
    const clientName = document.createElement('span');
    const clientSureName = document.createElement('span');
    const clientLastName = document.createElement('span');
    const clientCreated = document.createElement('td');
    const createdDate = document.createElement('span');
    const createdTime = document.createElement('span');
    const clientChanged = document.createElement('td');
    const changedDate = document.createElement('span');
    const changedTime = document.createElement('span');
    const clientContacts = document.createElement('td');
    const clientActions = document.createElement('td');
    const clientEdit = document.createElement('button');
    const clientDelete = document.createElement('button');
    const editSpinner = document.createElement('span');
    const deleteSpinner = document.createElement('span');

    const deleteClient = deleteClientModal()
    const editCLient = editClientModal(data)

    editSpinner.classList.add('actions__spinner');
    deleteSpinner.classList.add('actions__spinner');
    clientTr.classList.add('clients__item');
    clientTr.id = data.id;
    clientIdTd.classList.add('client__id');
    clientFullName.classList.add('clients__full-name');
    clientName.classList.add('clients__name');
    clientSureName.classList.add('clients__surname');
    clientLastName.classList.add('clients__lastname');
    clientCreated.classList.add('clients__created');
    createdDate.classList.add('created__date');
    createdTime.classList.add('created__time');
    clientChanged.classList.add('clients__changed');
    changedDate.classList.add('changed__date');
    changedTime.classList.add('changed__time');
    clientContacts.classList.add('clients__contacts');
    clientActions.classList.add('clients__actions');
    clientContacts.classList.add('clients__contacts');
    clientDelete.classList.add('clients__delete', 'btn-reset');
    clientEdit.classList.add('clients__edit', 'btn-reset');


    for (const contact of data.contacts) {
        createContactItemByType(contact.type, contact.value, clientContacts)
    }

    const deleteById = () => {
        import('./clientsApi.js').then(({deleteClientItem}) => {
            deleteClient.deleteModalDelete.addEventListener('click', () => {
                try {
                    deleteClient.deleteSpinner.style.display = 'block'
                    setTimeout(() => {
                        deleteClientItem(data.id).then(r => {
                            document.getElementById(data.id).remove()
                            deleteClient.deleteModal.remove()
                        })
                    }, 1500)

                } catch (e) {
                    console.log(e)
                } finally {
                    setTimeout(() => {
                        deleteClient.deleteSpinner.style.display = 'none'
                    }, 1500)
                }

            })
        })
    }

    clientDelete.addEventListener('click', () => {
        deleteSpinner.style.display = 'block'
        clientDelete.classList.add('action-wait')
        setTimeout(() => {
            deleteById()
            document.body.append(deleteClient.deleteModal)
            deleteSpinner.style.display = 'none'
            clientDelete.classList.remove('action-wait')
        }, 1000)
    })
    clientEdit.addEventListener('click', () => {
        editSpinner.style.display = 'block'
        clientEdit.classList.add('action-wait')
        setTimeout(() => {
            document.body.append(editCLient.editModal)
            editSpinner.style.display = 'none'
            clientEdit.classList.remove('action-wait')
        }, 1000)
    })

    deleteSpinner.innerHTML = svgSpinner
    editSpinner.innerHTML = svgSpinner
    clientId.textContent = data.id.substring(0, 6)
    clientName.textContent = data.name;
    clientSureName.textContent = data.surname;
    clientLastName.textContent = data.lastName;
    clientEdit.textContent = 'Изменить';
    clientDelete.textContent = 'Удалить';
    createdDate.textContent = formatDate(data.createdAt);
    createdTime.textContent = formatTime(data.createdAt);
    changedDate.textContent = formatDate(data.updatedAt);
    changedTime.textContent = formatTime(data.updatedAt);

    clientIdTd.append(clientId)
    clientFullName.append(clientName, clientSureName, clientLastName)
    clientCreated.append(createdDate, createdTime)
    clientChanged.append(changedDate, changedTime)
    clientDelete.append(deleteSpinner)
    clientEdit.append(editSpinner)
    clientActions.append(clientEdit, clientDelete)
    clientTr.append(
        clientIdTd,
        clientFullName,
        clientCreated,
        clientChanged,
        clientContacts,
        clientActions
    )
    return clientTr
}