//factorial
let num = 5;
let i = 1;
let fact = 1;

do {
  fact *= i;
  i++;
} while (i <= num);

console.log("Factorial of " + num + " = " + fact);
