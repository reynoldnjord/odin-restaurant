import image from "./restaurant.jpg";
import "./styles.css";

const displayImage = (parent) => {
    const myImage = document.createElement('img');
    myImage.src = image;
    parent.appendChild(myImage);
}

const home = () => {
    const homePage = document.createElement('div');
    homePage.classList.add('home');
    homePage.appendChild(headLine);
    homePage.appendChild(paragraph("Come and Get Some"));
    homePage.appendChild(paragraph("It's yours, since 1111"));
    displayImage(mainDiv);

    return homePage;
}

const paragraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

const loadHome = () => {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(home());
}

export default loadHome;