import { closeFunction, extendEvent} from "./functions.js";

export const dataModal= (title, action) => {
    const body = document.querySelector('body');
    const backDrop = document.createElement('div');
    backDrop.className = 'modal-backdrop fade show';
    body.append(backDrop);

    const modal = document.createElement('div');
    modal.className = 'modal fade show d-flex'
    modal.innerHTML = `
        <div class="modal-dialog w-100 mx-auto" >
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title fs-5 fst-italic fw-bolder">${title}</h2>
                    <button type="button" class="btn-close" ></button>
                </div>
                <div class="modal-body d-flex flex-row align-items-center justify-content-center">

                    <form class="w-100">

                        <div class="mb-1">
                            <label for="recipient-name" class="col-form-label">Name:</label>
                            <input type="text" class="form-control w-100" id="recipient-name">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-organization" class="col-form-label">Organization:</label>
                            <input type="text" class="form-control w-100" id="recipient-organization">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-profession" class="col-form-label">Profession:</label>
                            <input type="text" class="form-control w-100" id="recipient-profession">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-designation" class="col-form-label">Designation:</label>
                            <input type="text" class="form-control w-100" id="recipient-designation">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-email" class="col-form-label">Email:</label>
                            <input type="text" class="form-control w-100" id="recipient-email">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-phone" class="col-form-label">Phone:</label>
                            <input type="text" class="form-control w-100" id="recipient-phone">
                        </div>

                        <div class="mb-1">
                            <label for="recipient-url" class="col-form-label">Image URL:</label>
                            <input type="url" class="form-control w-100" id="recipient-url">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-id" class="col-form-label">ID NO:</label>
                            <input type="text" class="form-control w-100" id="recipient-id">
                        </div>
                    </form>
                </div>
                <div class="modal-footer d-flex flex-md-row flex-column align-items-center justify-content-center">
                    <button type="button" class="btn btn-secondary" >Close</button>
                    <button type="button" class="btn btn-primary">Complete</button>
                </div>
            </div>
        </div>
    `
    body.append(modal);
    modal.querySelector('.btn-close').addEventListener('click'  , (e)=> (closeFunction(body, backDrop, modal)));
    modal.querySelector('.btn-secondary').addEventListener('click'  , (e)=> (closeFunction(body, backDrop, modal)));

    const btnAction = modal.querySelector('.btn-primary');
    btnAction.addEventListener('click' , (e)=>{
        e.preventDefault();
        const newData = {
            id: modal.querySelector('#recipient-id').value.trim(),
            photo: modal.querySelector('#recipient-url').value.trim(),
            name: modal.querySelector('#recipient-name').value.trim(),
            profession: modal.querySelector('#recipient-profession').value.trim(),
            designation: modal.querySelector('#recipient-designation').value.trim(),
            company: modal.querySelector('#recipient-organization').value.trim(),
            contacts: {
              email: modal.querySelector('#recipient-email').value.trim(),
              phone: modal.querySelector('#recipient-phone').value.trim()
            }
        }
        extendEvent(action, newData);

    })
    
}