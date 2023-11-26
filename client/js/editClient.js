import {createClientsForm} from "./createModalForm.js";
import {deleteClientModal} from "./createDeleteModal.js";

export const editClientModal = (data) => {
    const editModal = document.createElement('div');
    const editModalContent = document.createElement('div');
    const createForm = createClientsForm()
    const titleId = document.createElement('span');

    titleId.classList.add('modal__id');
    editModal.classList.add('modal-edit', 'site-modal', 'modal-active');
    editModalContent.classList.add('edit-modal__content', 'site-modal__content', 'modal-active');

    titleId.textContent = `ID: ${data.id.substring(0, 6)}`;
    createForm.modalTitle.textContent = 'Изменить данные';
    createForm.cancelBtn.textContent = 'Удалить клиента';

    createForm.cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const deleteModal = deleteClientModal();
        document.body.append(deleteModal.deleteModal);

        import('./clientsApi.js').then(({deleteClientItem})=>{
            deleteModal.deleteModalDelete.addEventListener('click', (e) => {
                deleteClientItem(data.id).then(r => {
                    document.getElementById(data.id).remove()
                });
            })
        })
    })

    createForm.modalTitle.append(titleId);
    editModalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);
    editModal.append(editModalContent);

    return{
        editModal,
        editModalContent
    }
}