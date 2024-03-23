import deleteContent from './deleteContent';

export default function createMenu() {
    deleteContent();

    const content = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.textContent = "A really amazing selection of eggs!"

    content.appendChild(menu);
    return content
}