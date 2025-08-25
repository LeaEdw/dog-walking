import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (theClickEvent) => {
        const clickedWalker = theClickEvent.target
// Create a variable to target the city key for the dynamic aspect of the window alert for the city.
        if (clickedWalker.dataset.type === "walker") {
            window.alert(`${clickedWalker.innerText} works in ${clickedWalker.dataset.city}.`)
        }
    }

)

export const Walkers = () => {
    let walkerHTML = "<ul>"

// Update the city to target the cityId

    for (const walker of walkers) {
        walkerHTML += `<li 
                        data-id="${walker.id}"
                        data-city="${walker.city}"
                        data-type="walker">
                            ${walker.name}
                       </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

//This module will have changes based on the changes to incorporate the foreign Key.