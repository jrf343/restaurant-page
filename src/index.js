import _ from 'lodash';
import './style.css';
import homepage from './homepage.js';
import menupage from './menupage.js';
import contactpage from './contactpage.js';

const content = document.querySelector('#content');

const homeTab = document.querySelector('#homeTab');
homeTab.addEventListener('click', () => {
    content.innerHTML='';
    homepage();
})

const menuTab = document.querySelector('#menuTab');
menuTab.addEventListener('click', () => {
    content.innerHTML='';
    menupage();
})

const contactTab = document.querySelector('#contactTab');
contactTab.addEventListener('click', () => {
    content.innerHTML='';
    contactpage();
})

homepage();