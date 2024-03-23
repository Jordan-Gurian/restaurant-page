import deleteContent from './deleteContent';
import Contact from './its-always-sunny-in-philadelphia-egg.gif';


export default function createContact() {
    deleteContent();

    const content = document.querySelector('#content');
    
    const contact = document.createElement('div');
    contact.textContent = "Reach out at 555-555-5555!"

    const contactImage = new Image();
    contactImage.src = Contact;
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