import './style.css';
import Eggs from './eggs-benedict.jpeg';

function component() {
    const element = document.querySelector('#content');

    const eggHome = new Image();
    eggHome.src = Eggs;

    element.appendChild(eggHome);

    return element
}

// document.body.appendChild(component)


console.log('It worked!')