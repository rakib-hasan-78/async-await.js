import { modal } from './modal.js';

const loadData = document.getElementById('load-data');
loadData.addEventListener('click', (e) => {
    e.preventDefault();
    modal('Data Loading....', 'are you sure to load data ?')
});

const addData = document.getElementById('add-data');
addData.addEventListener('click', (e)=>{
    e.preventDefault();
    modal('Adding Data....', 'Do you want to add another data ??');
});
const editData = document.getElementById('edit-data');
editData.addEventListener('click', (e)=>{
    e.preventDefault();
    modal('Data editing...', 'are sure to edit data ?');
});


const deleteData = document.getElementById('delete-data');
deleteData.addEventListener('click', (e)=>{
    e.preventDefault();
    modal('Data Deleation',`once delted, it won't be recovered....`);
});


