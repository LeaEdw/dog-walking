import { getCities, getWalkers } from "./database.js";

const walkers = getWalkers();

document.addEventListener("click", (theClickEvent) => {
  const clickedWalker = theClickEvent.target;
  const cityId = clickedWalker.dataset.cityforeignkey;
  // Create a variable to target the city key for the dynamic aspect of the window alert for the city.

  const cities = getCities();

  for (const city of cities) {
    if (city.id === parseInt(cityId)) {
      window.alert(`${clickedWalker.innerText} works in ${city.name}.`);
    }
  }
});

export const Walkers = () => {
  let walkerHTML = "<ul>";
  // Update the city to target the cityId

  for (const walker of walkers) {
    walkerHTML += `<li 
                        data-id="${walker.id}"
                        data-cityForeignKey="${walker.cityId}"
                        data-type="walker">
                            ${walker.name}
                       </li>`;
  }

  walkerHTML += "</ul>";

  return walkerHTML;
};

//This module will have changes based on the changes to incorporate the foreign Key.
