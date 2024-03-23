import './style.css';
import createHome from  './createHome.js';
import createMenu from './createMenu.js';
import createContact from './createContact.js';


createHome();

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', () => createHome())

const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => createMenu())

const contactButton = document.querySelector('.contact');
contactButton.addEventListener('click', () => createContact())
