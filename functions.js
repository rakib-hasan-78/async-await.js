import { asyncDeleteFetch, asyncGetFetch, asyncPostFetch, asyncPutFetch } from "./asyncAwaitLib.js";
import { dataModal } from "./dataModal.js";
import { deleteModal } from "./deleteModal.js";

export const closeFunction = (parent, childOne, childTwo) => {
    
        if (childOne && parent.contains(childOne)) {
            parent.removeChild(childOne);
        }
        if (childTwo && parent.contains(childTwo)) {
            parent.removeChild(childTwo)
        }
}

export const dataShow = (data, id) => {
    let output = ``;
    data.forEach(data => {
        const email = data.contacts?.email || 'N/A';
        const phone = data.contacts?.phone || 'N/A';
        output += `
                <div class="card rounded-3 shadow-lg " style="width: 18rem;">
                    <div class="image-section w-100">
                        <div class="bg-secondary rounded-circle mx-auto d-flex align-items-center justify-content-center align-content-center my-1 shadow-md " style="width:140px; height:140px;">
                            <img src="${data.photo}" class="card-img-top" alt="${data.name}" style="width:100%; height:100%;">
                        </div>
                    </div>
                    <div class="card-body py-0 my-0">
                        <h5 class="card-title text-center">${data.name}</h5>
                        <p class="card-text text-center p-0 my-0"> ${data.company}</p>
                        <p class="card-text text-center p-0 my-0"> ${data.profession}, ${data.designation}</p>
                        <div class="w-100 d-flex flex-column align-items-center">
                            <span>${email}</span> <span class="fs-6">${phone}</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-center">
                            <span class="fw-bolder fst-italic text-info">ID NO :  ${data.id}</span>
                        </div>
                    </div>
            </div>
        `;
    });
    document.getElementById(id).innerHTML = output;
};

export const eventFunction = (action) => {
    /* local storage to retrive data on the screen  */
    let userData = localStorage.getItem('user-data');
    if (userData) {
        try {
            let parsedData = JSON.parse(userData);
            dataShow(parsedData, 'data-info');
        } catch (error) {
            console.error(error);
            localStorage.removeItem('user-data');
        }
    }
    /* handling events */
    switch (action) {
        case 'get':
            asyncGetFetch('http://localhost:3000/professionals')
                .then((response) => {
                    dataShow(response, 'data-info');
                    localStorage.setItem('user-data', JSON.stringify(response));
                })
            break;
        case 'post':
            dataModal('Want To Another Data??', 'post')
            break;
        case 'put':
            dataModal('Want To Edit Existing Data ??', 'put')
            break;
        case 'delete':
            deleteModal('delete', 'Sure To Delete Data ??')
            break;

        default:
            break;
    }
}
export const extendEvent = (action, obj) => {
    const targetID = obj.id;
    const targetedURL = `http://localhost:3000/professionals/${targetID}`;
    switch (action) {
        case 'post':
            asyncPostFetch(`http://localhost:3000/professionals`,obj)
                .then(() => {
                    return asyncGetFetch('http://localhost:3000/professionals');
                })
                .then((response) => {
                    dataShow(response, 'data-info');
                    localStorage.setItem('user-data', JSON.stringify(response));
                })
                .catch(error=>{
                    console.error(error)
                })
              
            break;
        case 'put':
                asyncPutFetch(targetedURL, obj)
                .then(()=>{
                    return asyncGetFetch('http://localhost:3000/professionals')
                })
                .then(response=>{
                    dataShow(response, 'data-info');
                    localStorage.setItem('user-data', JSON.stringify(response));
                })
                .catch(error=>{
                    console.error(error);
                })
          case 'delete':
            asyncDeleteFetch(targetedURL)
                .then(()=>{
                    return asyncGetFetch('http://localhost:3000/professionals')
                })
                .then(response=>{
                    dataShow(response, 'data-info');
                    localStorage.setItem('user-data', JSON.stringify(response));
                })
                .catch(error=>{
                    console.error(error);
                })         
        default:
            console.error('unfimiliar error..!')
            break;
    }
}
