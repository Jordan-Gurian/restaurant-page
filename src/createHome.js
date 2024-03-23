import Eggs from './eggs-benedict.jpeg';
import deleteContent from './deleteContent.js';

export default function createHome() {
    deleteContent();

    const content = document.querySelector('#content');

    const eggHome = new Image();
    eggHome.src = Eggs;
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