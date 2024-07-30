import { database } from './aquariumData.mjs';

export const fishList = () => {
    // Generate an HTML representation of each fish
    const fishListElement = document.querySelector('#fishList')
    database.fish.map(fish => {
        fishListElement.innerHTML += `<h2>${fish.species}</h2>`
    })


};