import "./styles.css";

const about = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const addres = document.createElement('p');
    addres.textContent = '335 Camden Camp, Apt. 251, 10728, Lake Vallieville, Connecticut, United States';

    const phone = document.createElement('p');
    phone.textContent = '205-200-5444';

    contact.appendChild(addres);
    contact.appendChild(phone);

    return contact;
}

const loadAbout = () => {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(about);
}
export default loadAbout;