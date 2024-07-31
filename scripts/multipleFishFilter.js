import {database} from "./aquariumData.mjs"

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""
    for (let fish of database.fish) {
        if (fish.length % 3 === 0) {
            console.log(fish)
            holyFish += `
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
        }

    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFish = ""
    for (let fish of database.fish) {
        console.log(fish, ' SOLDIER FISH')
        if (fish.length % 5 === 0) {
            console.log(fish, ' SOLDIER FISH')
            soldierFish += `
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
        }
    }
    return soldierFish
}
export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFish = ""
    for (let fish of database.fish) {
        console.log(fish, ' for loop runs here')
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            console.log(fish, ' REGULAR FISH')
            regularFish += `
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
        }
    }
    return regularFish
}