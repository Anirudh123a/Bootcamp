function SI(P, N, R) {
    const a = (P * N * R) / 100;  
    return a;
}

let P = parseFloat(prompt("Enter the Principal (P): "));
let N = parseFloat(prompt("Enter the Number of Years (N): "));
let R = parseFloat(prompt("Enter the Rate of Interest (R): "));

let a = SI(P, N, R);

console.log("Simple Interest is: " + a);
