import { database } from './aquariumData.mjs';

export const fishList = () => {
    // Generate an HTML representation of each fish
    const fishListElement = document.querySelector('#fishList')
    database.fish.map(fish => {
        const h2 = document.createElement('h2')
        h2.textContent = `${fish.species}`
        fishListElement.appendChild(h2)
    })
    // database.fish.map(fish => {
    //     fishListElement.innerHTML += `<h2>${fish.species}</h2>`
    // })


};