// count the factors
let num = 12;
let i = 1;
let count = 0;

while (i <= num) {
  if (num % i === 0) {
    count++;
  }
  i++;
}
console.log(count);
