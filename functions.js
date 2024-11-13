import { asyncGetFetch } from "./asyncAwaitLib.js";

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
            <div class="card" style="width: 18rem;">
                <img src="${data.photo}" class="card-img-top" alt="${data.name}">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text"> ${data.company}</p>
                    <p class="card-text"> ${data.profession}, ${data.designation}</p>
                    <div class="d-flex align-items-center justify-content-between">
                        <span>${email}</span> <span>${phone}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                        <span>${data.id}</span>
                    </div>
                </div>
           </div>
        `;
    });
    document.getElementById(id).innerHTML = output;
};

export const eventFunction = (action, obj) => {
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
    const targetedID = obj.id || '';
    switch (action) {
        case 'get':
            asyncGetFetch('http://localhost:3000/professionals')
                .then((response) => {
                    dataShow(response, 'data-info');
                    localStorage.setItem('user-data', JSON.stringify(response));
                })
            break;
        case value:
            
            break;
        case value:
            
            break;
        case value:
            
            break;

    
        default:
            break;
    }
}