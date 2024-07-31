import { database } from './aquariumData.mjs';

export const fishList = () => {
    let fishHTML = ''
    const fishListElement = document.querySelector('#fishList')
    database.fish.map(fish => {
        fishHTML += `
        <div class="fishCard">
        <article class='fishImageContainer'>
            <img class="fishImage" src="${fish.image}"/>
        </article>

        <article class='fishDetailsContainer'>
            <section class="fishDetails">
                <h2 class="name">${fish.name}</h2>
                <p class="species">Species: ${fish.species}</p>
                <p class="length">Length: ${fish.length}</p>
                <p class="location">Location: ${fish.location}</p>
                <p class="diet">Diet: ${fish.diet}</p>
            </section>
        </article>
        </div>
        `
    })
    return fishHTML
};