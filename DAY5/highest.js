let a = 2, b = 13, c = 5;
let max;

if (a >= b && a >= c) {
    max = a;
} else if (b >= a && b >= c) {
    max = b;
} else {
    max = c;
}

console.log("The highest number is: " + max);
