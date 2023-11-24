import {createContactItemByType, formatDate, formatTime} from "./utils.js";
import {deleteClientModal} from "./createDeleteModal.js";
import {editClientModal} from "./editClient.js";

export const createClientItem = (data) => {
    const clientTr = document.createElement('tr');
    const clientId = document.createElement('span');
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

    const deleteClient = deleteClientModal()
    const editCLient = editClientModal(data)

    clientTr.classList.add('clients__item');
    clientTr.id = data.id;
    clientId.classList.add('client__id');
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


    for(const contact of data.contacts){
        createContactItemByType(contact.type, contact.value, clientContacts)
    }

    const deleteById = () => {
        import('./clientsApi.js').then(({deleteClientItem})=>{
            deleteClient.deleteModalDelete.addEventListener('click', ()=>{
                deleteClientItem(data.id).then(r =>{
                        deleteClient.deleteModal.remove()
                } )
                document.getElementById(data.id).remove()
            })
        })
    }

    clientDelete.addEventListener('click', () => {
        deleteById()
        document.body.append(deleteClient.deleteModal)
    })
    clientEdit.addEventListener('click', () => {
        document.body.append(editCLient.editModal)
    })


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

    clientFullName.append(clientName, clientSureName, clientLastName)
    clientCreated.append(createdDate, createdTime)
    clientChanged.append(changedDate, changedTime)
    clientActions.append(clientEdit, clientDelete)
    clientTr.append(
        clientId,
        clientFullName,
        clientCreated,
        clientChanged,
        clientContacts,
        clientActions
    )
    return clientTr
}