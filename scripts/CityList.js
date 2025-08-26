import { getWalkers, getCities } from "./database.js";

//Import the getCities function from database.js
//Create a variable for the structured clone created by the getCities function.

const walkers = getWalkers();
const cities = getCities();

document.addEventListener("click", (clickEvent) => {
  const clickedCity = clickEvent.target;
  const walkerCity = clickedCity.dataset.city;

  //Find the whole city objects based on the cityId from above

  for (const walker of walkers) {
    if (walker.cityId === parseInt(walkerCity)) {
      window.alert(`${walker.name} is servicing ${clickedCity.innerText}.`);
    }
  }
})

export const CityList = () => {
  let citiesHTML = "<ol>";

  for (const city of cities) {
    // Change the data-type to be dynamic based on the cities variable from the foreign key.

    citiesHTML += `<li 
                    data-type="${city.name}"
                    data-city="${city.id}">
                            ${city.name}
                   </li>`;
  }

  citiesHTML += "</ol>";

  return citiesHTML;
};

//This module will have changes based on the changes to incorporate the foreign Key.
