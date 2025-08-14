let n = 10; 

console.log("Even numbers up to " + n + ":");
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Odd numbers up to " + n + ":");
for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
