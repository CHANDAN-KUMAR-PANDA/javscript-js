//factor
let num = 12;
let i = 1;

console.log("Factors of " + num + " are:");

do {
  if (num % i === 0) {
    console.log(i);
  }
  i++;
} while (i <= num);
