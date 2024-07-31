import {database} from "./aquariumData.mjs"

export const tipList = () => {
    const tipList = document.getElementById('tipList')
    database.tips.map(tip => {
        tipList.innerHTML += `
        <div class="tipContainer">
            <h4 class="topic">${tip.topic}</h4>
            <ul class="tips">
                <li class="tip">${tip.text}</li>
            </ul>
        </div>
        `
    })
}