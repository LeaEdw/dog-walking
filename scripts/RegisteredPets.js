import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedDog = clickEvent.target
        const walkerId = clickedDog.dataset.walkerforeignkey
        
        // Find the whole walker object based on the walkerId from above

        const allWalkers = getWalkers()
        for (const walker of allWalkers) {
            if (walker.id === parseInt(walkerId)) {
                window.alert(`${clickedDog.innerHTML} is being walked by ${walker.name}.`)
            }
        }
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li 
                        data-walkerForeignKey= "${pet.walkerId}"
                        data-type="dog">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

