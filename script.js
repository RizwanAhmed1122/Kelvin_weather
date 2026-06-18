// --------------------------------------------
// Kelvin Weather Converter Project
// --------------------------------------------

// The forecast today is 293 Kelvin.
const kelvin = 293;


// Convert Kelvin to Celsius by subtracting 273.
const celsius = kelvin - 273;


// Convert Celsius to Fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;


// Round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);


// Convert Celsius to Newton.
let newton = celsius * (33 / 100);


// Round down the Newton temperature.
newton = Math.floor(newton);


// Print results to the Console.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${newton} degrees Newton.`);


// Show results on the webpage.
document.getElementById("kelvin").innerHTML =
`Kelvin : ${kelvin} K`;

document.getElementById("celsius").innerHTML =
`Celsius : ${celsius} °C`;

document.getElementById("fahrenheit").innerHTML =
`Fahrenheit : ${fahrenheit} °F`;

document.getElementById("newton").innerHTML =
`Newton : ${newton} °N`;