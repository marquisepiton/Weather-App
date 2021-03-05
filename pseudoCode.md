# Weather App Pseudo Code 

## Objective: 

The user will be prompted to to enter a zip code, then displays current weather information for that location.

## Steps: 

    START:

    1. The user opens the page. Which, should render everything.
    2. The user will be prompted to put in a zip code. 
        Note: Base on the if the user allow Geo tracking. If so, the weather information should appear automatically.
    3. The user clicks the "Update" button.
    4.  The current weather of the zip code should appear.
        possible Feature: The background changes base on the current temperature.

    END. 


## Events: 

    - (If Geo tracking in enabled) The user opens the page and the weather will show automatically in current location.
    - User hits "Update": It will show the weather condition of the specified zip code. 
    - Feature: Once the zip code is specified, the background will change base on the weather information. 


## Objects: 

    HTML/CSS
    - 1 Title 
    - 1 Button (Update)
    - 4 TextBox
    - Feature: Background weather. 
    JS:
    - API (Object)/ Weather (Object)? maybe
    - Temperature (Integer)
    - City (String)
    - Conditions [Array of Strings]
    - Zip Code (Integer)

## Functions (Not in order):

```
FUNCTION: displayCurrentWeather():
    IF: User clicks on the "Update" button THEN
        IF: "Zip Code" is equal to Null or is a invalid number:
            PRINT: "Zip code invalid:
        ELSE: 
            SET: Weather information
            GET: Weather information
            Display: Weather information
    ELSE: Show the Current/Default temperature
```
```
FUNCTION: setTemperature():
    SET: NEW Temperature

```
```
FUNCTION: getTemperature():
    GET: Temperature

```
```
FEATURE: 
FUNCTION: setWeatherConditionBackground():
    SWITCH: 
        CASE 1:Conditions are hot THEN
               Background will show a sun.

        CASE 2:Conditions are cold THEN
               Background will show a snow.

        CASE 3:Conditions are cloudy THEN
               Background will show a cloudy
        CASE 4:Conditions are clear THEN
               Background will show a clear

```

     
             
             



    








