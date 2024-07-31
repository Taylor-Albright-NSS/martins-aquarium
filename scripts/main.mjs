import { fishList } from './fishList.mjs'
import { tipList } from './tipList.mjs'
import { locationList } from './locationList.mjs'
import { mostHolyFish, soldierFish, regularFish } from './multipleFishFilter.js'

// import { tipList } from './tipList.mjs'
// import { locationList } from './locationList.mjs'

// Generate the fish list
let fishListStored = fishList()
let tipListStored = tipList()
let locationListStored = locationList()

let fishParent = document.getElementById('fishList')
let locationParent = document.getElementById('locationList')
let tipParent = document.getElementById('tipList')
let mostHolyFishStored = mostHolyFish()
let soldierFishStored = soldierFish()
let regularFishStored = regularFish()
fishParent.innerHTML = `${mostHolyFishStored}${soldierFishStored}${regularFishStored}`
locationParent.innerHTML = `${locationListStored}`
tipParent.innerHTML = `${tipListStored}`
// Generate the care tips
// const tipHTML = tipList()

// Generate the location list
// const locationHTML = locationList()

// Render each HTML string to the correct DOM element