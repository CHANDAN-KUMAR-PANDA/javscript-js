//count the factors
let num = 12;
let i = 1;
let count = 0;

do {
  if (num % i === 0) {
    count++;
  }
  i++;
} while (i <= num);

console.log("Total factors of " + num + " = " + count);
