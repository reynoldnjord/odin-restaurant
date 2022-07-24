import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";
import { ContextReplacementPlugin } from "webpack";

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Bestie's Restaurant";

    header.appendChild(title);
    header.appendChild(loadNav());

    return header;
}

const loadNav = () => {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('home-button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setButton(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setButton(menuBtn);
        loadMenu();
    });

    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('about-button');
    aboutBtn.textContent = 'About';
    aboutBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setButton(aboutBtn);
        loadAbout();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);

    return nav;
}

const setButton = (button) => {
    const buttons = document.querySelectorAll('.nav-button');
    
    buttons.forEach(button => {
        if (button !== this){
            button.classList.remove('active');
        }
    })
    button.classList.add('active');
}

const createMain = () => {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

const initializeWebsite = () => {
    document.body.appendChild(createHeader());
    document.body.appendChild(createMain());

    setButton(document.querySelector('.nav-button'));
    loadHome()
}

export default initializeWebsite;