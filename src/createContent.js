import Eggs from './eggs-benedict.jpeg';

export default function createContent() {
    const element = document.querySelector('#content');

    const eggHome = new Image();
    eggHome.src = Eggs;
    eggHome.alt = 'food';
    eggHome.classList.add('home-image');

    element.appendChild(eggHome);

    const headHome = document.createElement('h1');
    headHome.textContent = 'Welcome to Egg House!';

    element.appendChild(headHome);

    const bodyHome = document.createElement('p');
    bodyHome.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex unde eos animi nesciunt assumenda a omnis et quia. 
    Odio quis temporibus earum expedita neque sapiente odit non eos ratione at! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nobis vitae fugit harum qui quas, atque, vero voluptate quos officia corporis pariatur culpa iusto quia quaerat et ea, esse perspiciatis! Perferendis.`
    bodyHome.classList.add('home-body')

    element.appendChild(bodyHome)

    return element
}