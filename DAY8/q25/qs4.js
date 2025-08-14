function celcius(F) {
    const  C = (5 / 9.0) * (F - 32);
    return C;
}

let F = parseFloat(prompt("Enter Temperature in Fahrenheit: "));

let C = celcius(F);

console.log(`Temperature of Fahrenheit ${F.toFixed(2)} is ${C.toFixed(2)} in Celsius.`);

