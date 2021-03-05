//---------------------------------------I-N-I-T-A-L-I-Z-I-N-G------------------------------------------------------------------------------
// Variables:

// These are the weather conditions
//                  [0]     [1]      [2]      [3]
let weatherType = ["Sunny", "Rainy", "Cloudy", "Snowy"];
let farScale = 0;

// apiKey IMPORTANT: Will allow authorization to use the JSON information. 
const apiKey = 'e5279ee0ac0b5902359c383ac0af01ec';

//-----------------------------------------L-I-S-T-E-N-E-R-S-----------------------------------------------------------------------------
/*
ID: 
    - "city"        (Text)
    - "kev"         (Text)
    - "cel"         (Text)
    - "Far          (Text)"
    - "Condition"   (Text)
    - "Update"      (Button)
*/

// Elements: 
const city = document.getElementById('city');
const kev = document.getElementById('kev');
const cel = document.getElementById('cel');
const far = document.getElementById('far');
const condition = document.getElementById('condition');
const picCon = document.getElementById('picCon');
const background = document.getElementById('background');


// Button Listeners:
const update = document.getElementById('button-addon2');

//----------------------------------------F-U-N-C-T-I-O-N-S----------------------------------------------------------------------------------


// Every time the user clicks the button, should get the weather info.
update.addEventListener('click', ()=>{


    displayCurrentWeather();
    changeBackground();

 
});

// This function should update the weather info. 
function displayCurrentWeather() {


    let zipCode = document.getElementById('zip').value;



    // This is to retrieve the weather information from the server. 
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;
    // Fetches the JSON information so it can be used. 
    fetch(weatherAPI)
        .then(response => response.json())
        .then(function (attributes) {
            {
            
                let kevTemp = attributes['main']['temp'];


                // This will replace the text for: City, Temperature, Condition.
                // City
                city.innerHTML = attributes['name'];
                // Fahrenheit
                // Get the fahrenheit url: https://www.google.com/search?q=how+to+get+fahrenheit+from+kelvin&oq=how+to+get+faren&aqs=chrome.5.0j69i57j0i10l6j0i22i30j0i10i22i30.7538j0j7&sourceid=chrome&ie=UTF-8
                // F = 1.8(K - 273) + 32
                far.innerHTML =  Math.round(1.8*(kevTemp - 273))+32 + ' °F';
                // Get the Celsius url: https://www.google.com/search?sxsrf=ALeKk01iQxlZaw9tpg57uciVNMW5rZwXwQ%3A1614927298821&ei=wtVBYOvHMY2PtAbjpLvYAQ&q=how+to+get+celsius+from+kelvin&oq=how+to+ge+the+celcuis+fr&gs_lcp=Cgdnd3Mtd2l6EAEYADIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIFCAAQhgM6BwgjELADECc6BwgAEEcQsAM6BAgAEEM6AggAOgQIIxAnOgUIABCRAjoFCAAQsQM6BwgAELEDEEM6BwgjEOoCECc6CwguELEDEMcBEKMCOgcIABCHAhAUOgcILhAKEJMCOgQIABAKOgcIIxCxAhAnOgcIABCxAxAKOggIABCxAxCDAToECAAQDToGCAAQDRAKOggIABAWEAoQHjoGCAAQDRAeOggIABAIEA0QHjoKCCEQFhAKEB0QHlDaj9cIWLbY1whgt-bXCGgEcAJ4AIAB9wGIAZ4hkgEGMy4zMS4xmAEAoAEBqgEHZ3dzLXdperABCsgBCcABAQ&sclient=gws-wiz
                // Celsius
                // C = K - 273.15
                cel.innerHTML =  Math.round(kevTemp - 273.15) + ' °C';
                // The API automatically has the Kevin value in the JSON.
                // Kevin
                kev.innerHTML =  parseInt(kevTemp) + ' °K';
                farScale = Math.round(1.8*(kevTemp - 273))+32
                // Condition
                condition.innerHTML = attributes['weather'][0]['main'];
                // The condition picture
                picCon.src = "http://openweathermap.org/img/wn/" + attributes.weather[0].icon + "@4x.png"
            }; 

         // catches any zip code errors. The user will be prompted to try again. 
        }) .catch(function(error){
        alert("Not a valid zip code. Please try again.")
        console.log("Zip code was invalid")
        
    })

}
// Work in progress.........
function changeBackground(){

    if(farScale >= 30){

    background.innerHTML = background.style.backgroundImage = url('sunny.jpg');
        
    }


    



}

