function CI(P, R, N) {
    const a = ( P * (1 + R/100)^N);  
    return a;
}

let P = parseFloat(prompt("Enter the Principal  Amount(P): "));
let R = parseFloat(prompt("Enter the Number of Rate (R): "));
let N = parseFloat(prompt("Enter the Number of Years (N): "));

let a = CI(P, R, N);

console.log("Compound Interest is: " + a);
