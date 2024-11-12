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

