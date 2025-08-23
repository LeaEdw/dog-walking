import { getWalkers } from "./database.js";

const walkers = getWalkers();

document.addEventListener("click", (clickEvent) => {
  const clickedCity = clickEvent.target;
  if (clickedCity.dataset.type === "city") {
    window.alert(`${clickedCity.dataset.walkername} is servicing ${clickedCity.innerText}.`);
  }
});

export const CityList = () => {
  let citiesHTML = "<ol>";

  for (const walker of walkers) {
    citiesHTML += `<li data-type="city"
                        data-walkername="${walker.name}">
                            ${walker.city}
                   </li>`;
  }

  citiesHTML += "</ol>";

  return citiesHTML;
};
