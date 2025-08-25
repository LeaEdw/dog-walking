import { getCities, getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers, cities) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId && walkers.cityId === cities.id) {
            petWalker = walker
        }
    }

    return petWalker
}

// // Function whose responsibility is to find the city where each walker works
// const findCity = (walker, allCities) => {
//     let walkerCity = null

//     for(const city of allCities) {
//         if(city.id === walker.cityId) {
//             walkerCity = city
//         }
//     }

//     return walkerCity
// }

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"
// Update "currentPetWalker.city" to target the new foreign key
    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers, cities)
        //const currentWalkerCity = findCity(walkers, cities)
        assignmentHTML = `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

//This module will have changes based on the changes to incorporate the foreign Key.