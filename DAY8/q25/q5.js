function volume(r) {
    const V = (4/3) * (22/7) * r * r * r;
    return V;
}
function surfaceArea(r) {
    const A = 4 * (22/7) * r * r;
    return A;
}

let r = parseFloat(prompt("Enter Radius of Sphere: "));

let V = volume(r);
let A = surfaceArea(r);

console.log(`Volume of Sphere with Radius ${r.toFixed(2)} is ${V.toFixed(2)}.`);
console.log(`Surface Area of Sphere with Radius ${r.toFixed(2)} is ${A.toFixed(2)}.`);