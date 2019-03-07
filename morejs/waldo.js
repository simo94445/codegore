"use strict"
let waldoCount = 0; // Sæt global variabel så vi kan holde øje med hvor mange Waldos er fundet.
function FindWaldo(){ // Dette er en Function Constructor, derfor starter function navnet med et stort bogstav.
  this.found = function(){ // Lav en method der giver brugeren besked
    alert("Du fandt Holger"); // Giv besked når Holger er fundet.
  };

  this.newWaldo = function(){
    let body = document.getElementsByTagName('body')[0]; // Gør livet lettere ved at bruge et variabel som alias for vores elementer af vores HTML
    let button = document.getElementById('theButton'); // -- || --

    switch(waldoCount){ // Vi laver en switch statement der læser waldoCount
      case 0:
      body.style.backgroundImage = "url(waldo2.jpg)"; // Sæt ny baggrund
      button.setAttribute('style', 'margin-top:150px;margin-left:510px;'); // Sæt ny knap position
      waldoCount++; // Tilføj 1 til vores globale variabel.
      break;
      case 1:
      body.style.backgroundImage = "url(waldo3.jpg)";
      button.setAttribute('style', 'margin-top:330px;margin-left:355px;');
      waldoCount++;
      break;
      case 2:
      body.style.backgroundImage = "url(waldo4.jpg)";
      button.setAttribute('style', 'margin-top:190px;margin-left:365px;');
      waldoCount++;
      break;

      default: // Hvad skal der ske når der ikke er flere Holgere at finde?
      alert("Der er ikke flere Holgere at finde.");
    }

  };
}

function foundWaldo(){ // Denne funktion kan kaldes af vores knap.
  let findWaldo = new FindWaldo; // Vi laver en ny funktion med ovenstående Function Constructor, fordi Javascript's garbage collector fjerner variabler og funktioner der ikke bliver brugt.
  findWaldo.found();
  findWaldo.newWaldo();
}
