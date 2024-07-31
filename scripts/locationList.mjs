import { database } from "./aquariumData.mjs";

export const locationList = () => {
    let locationHTML = ''
    const locationListElement = document.getElementById('locationList')
    database.locations.map(location => {
        locationHTML += `
        <article class="locations">
            <section class="locationItems">
                <h3 class="locationName">${location.name}</h3>
                <p class="locationCountry">Country: ${location.country}</p>
                <p class="locationDescription">${location.description}</p>
            </section>
        </article>
        `
    })
    return locationHTML
}