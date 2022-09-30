// Write your JavaScript code here!

const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
let planetPicked = pickPlanet(listedPlanets);

addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.imageUrl);

   })
   
let list = document.getElementById("faultyItems");

list.style.visibility = "hidden";
let form = this.document.querySelector("Form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let pilotInfo = document.querySelector("input[name=pilotName]");
    let pilot = pilotInfo.value;

    let copilotInfo = document.querySelector("input[name=copilotName]");
    let copilot = copilotInfo.value;

    let fuelLevelInfo = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = fuelLevelInfo.value;

    let cargoMassInfo = document.querySelector("input[name=cargoMass]");
    let cargoLevel = cargoMassInfo.value;

    


    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
});




});