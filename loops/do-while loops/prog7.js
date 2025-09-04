//reverse the factors
let num = 12;
let i = num;

console.log("Factors of " + num + " in reverse order:");

do {
  if (num % i === 0) {
    console.log(i);
  }
  i--;
} while (i >= 1);
