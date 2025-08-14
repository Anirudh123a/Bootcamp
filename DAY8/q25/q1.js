function Area(r) {
    const a = (22.0 / 7) * r * r; 
    return a;
}

let r = parseFloat(prompt("Enter Radius of Circle: "));

let a = Area(r);

console.log(`Area of Circle with Radius ${r.toFixed(4)} is ${a.toFixed(4)}`);

