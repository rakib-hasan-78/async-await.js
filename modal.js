import { closeFunction } from "./functions.js";

export const modal = (title, bodyText) => {
    const body = document.querySelector('body');
    const backDrop = document.createElement('div');
    backDrop.className = 'modal-backdrop fade show';
    body.append(backDrop);
    const modal = document.createElement('div');
    modal.className = 'modal fade show d-flex';
    modal.innerHTML = `
    
    <div class="modal-dialog modal-dialog-centered" style="width:40%;">
        <div class="modal-content">
        <div class="modal-header">
            <h2 class="modal-title fs-5 fst-italic fw-bolder" id="exampleModalToggleLabel">${title}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-capitalize text-center">
            ${bodyText}
        </div>
        <div class="modal-footer d-flex align-content-center justify-content-center">
            <button class="btn btn-success text-capitalize py-2 px-3 w-100 w-md-25">okay</button>
            <button class="btn btn-danger text-capitalize py-2 px-3 w-100 w-md-25">discard</button>
        </div>
        </div>
    </div>

    `
    body.append(modal);

    //cancel icon handler
    modal.querySelector('.btn-close').addEventListener('click', () => {
        closeFunction(body, backDrop, modal);
    });
    // close button
    modal.querySelector('.btn-danger').addEventListener('click', (e)=>{
        e.preventDefault();
        closeFunction(body, backDrop, modal);
    }) 
}

