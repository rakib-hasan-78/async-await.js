import { extendEvent } from "./functions.js";

export const deleteModal = (action, title) => {
    const body = document.querySelector('body');
    const backDrop = document.createElement('div');
    backDrop.className = 'modal-backdrop fade show';
    body.append(backDrop);

    const modal = document.createElement('div');
    modal.className = 'modal fade show d-flex';
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
                            <label for="recipient-id" class="col-form-label">ID NO:</label>
                            <input type="text" class="form-control w-100" id="recipient-id">
                        </div>
                    </form>
                </div>
                <div class="modal-footer d-flex flex-md-row flex-column align-items-center justify-content-center">
                    <button type="button" class="btn btn-secondary" >Discard</button>
                    <button type="button" class="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    `
    body.append(modal);
    modal.querySelector('.btn-close').addEventListener('click'  , (e)=> (closeFunction(body, backDrop, modal)));
    modal.querySelector('.btn-secondary').addEventListener('click'  , (e)=> (closeFunction(body, backDrop, modal)));
    modal.querySelector('.btn-primary').addEventListener('click', (e)=>{
        e.preventDefault();
        const targetedId = {
            id: modal.querySelector('#recipient-id').value.trim(),
        }
        extendEvent(action, targetedId);
    })
}