import "./styles.css";

const menu = () => {
  const menuElement = document.createElement("div");
  menuElement.classList.add("menu");

  menuElement.appendChild(generateMenu("expensive food 1", "150$"));

  menuElement.appendChild(generateMenu("expensive food 2", "160$"));

  menuElement.appendChild(generateMenu("expensive food 3", "250$"));

  menuElement.appendChild(generateMenu("cheap food", "1$"));

  return menuElement;
};

const generateMenu = (name, price) => {
  const item = document.createElement("div");
  item.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName = name;

  const foodDescription = document.createElemen("p");
  foodDescription = price;

  item.appendChild(foodName);
  item.appendChild(foodDescription);

  return item;
};

const loadMenu = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(menu());
};

export default loadMenu;
