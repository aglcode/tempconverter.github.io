// TEMPERATURE CHECKER

document.getElementById("submitBtn").onclick = function(){

let temp;

if(document.getElementById("cBtn" ).checked){ 
   temp = document.getElementById("tempBox").value; // enter a value | when enter it is automatically a string
   temp = Number(temp);                             // convert the string into a number
   temp = toCelsius(temp);                          // call a function
   document.getElementById("displayTemp").innerHTML = temp + "°C";     // display the result in HTML
}
else if(document.getElementById("fBtn" ).checked){
    temp = document.getElementById("tempBox").value; // enter a value | when enter it is automatically a string
    temp = Number(temp);                             // convert the string into a number
    temp = toFahrenheit(temp);                          // call a function
    document.getElementById("displayTemp").innerHTML = temp  + "°F";       // display the result in HTML
}
else{
   document.getElementById("displayTemp").innerHTML = "Please select a unit";
}

}

function toCelsius(temp){
    return (temp - 32) * (5/9);   // formula to calculate the celsius 
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;    // formula to calculate the fahrenheit
}