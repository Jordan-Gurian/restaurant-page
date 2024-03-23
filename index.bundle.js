"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([[57],{

/***/ 62:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./src/eggs-benedict.jpeg
const eggs_benedict_namespaceObject = __webpack_require__.p + "8f605d8e2606f7e96ecd.jpeg";
;// CONCATENATED MODULE: ./src/deleteContent.js
function deleteContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    return content
}
;// CONCATENATED MODULE: ./src/createHome.js



function createHome() {
    deleteContent();

    const content = document.querySelector('#content');

    const eggHome = new Image();
    eggHome.src = eggs_benedict_namespaceObject;
    eggHome.alt = 'food';
    eggHome.classList.add('home-image');

    content.appendChild(eggHome);

    const caption = document.createElement('div');
    caption.textContent = `Photo by DOTDASH MEREDITH FOOD STUDIOS `;
    caption.classList.add('caption');
    
    content.appendChild(caption);


    const headHome = document.createElement('h1');
    headHome.textContent = 'Welcome to Egg House!';

    content.appendChild(headHome);

    const bodyHome = document.createElement('p');
    bodyHome.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex unde eos animi nesciunt assumenda a omnis et quia. 
    Odio quis temporibus earum expedita neque sapiente odit non eos ratione at! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nobis vitae fugit harum qui quas, atque, vero voluptate quos officia corporis pariatur culpa iusto quia quaerat et ea, esse perspiciatis! Perferendis.`
    bodyHome.classList.add('home-body')

    content.appendChild(bodyHome)

    return content
}
;// CONCATENATED MODULE: ./src/createMenu.js


function createMenu() {
    deleteContent();

    const content = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.textContent = "A really amazing selection of eggs!"

    content.appendChild(menu);
    return content
}
;// CONCATENATED MODULE: ./src/its-always-sunny-in-philadelphia-egg.gif
const its_always_sunny_in_philadelphia_egg_namespaceObject = __webpack_require__.p + "0e2222e2fea481e6b61e.gif";
;// CONCATENATED MODULE: ./src/createContact.js




function createContact() {
    deleteContent();

    const content = document.querySelector('#content');
    
    const contact = document.createElement('div');
    contact.textContent = "Reach out at 555-555-5555!"

    const contactImage = new Image();
    contactImage.src = its_always_sunny_in_philadelphia_egg_namespaceObject;
    contactImage.alt = 'contact-image';
    contactImage.classList.add('contact-image');

    const caption = document.createElement('div');
    caption.textContent = `Frank Reynolds from "It's Always Sunny in Philadelphia"`
    caption.classList.add('caption');

    content.appendChild(contact);
    content.appendChild(contactImage);
    content.appendChild(caption);

    return
}
;// CONCATENATED MODULE: ./src/index.js






createHome();

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', () => createHome())

const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => createMenu())

const contactButton = document.querySelector('.contact');
contactButton.addEventListener('click', () => createContact())


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(62));
/******/ }
]);
//# sourceMappingURL=index.bundle.js.map