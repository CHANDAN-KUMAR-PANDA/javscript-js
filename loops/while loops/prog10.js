// prime num between 10 to 20
let num = 10;

console.log("Prime numbers between 10 and 20:");

while (num <= 20) {
  let i = 1;
  let count = 0;

  while (i <= num) {
    if (num % i === 0) {
      count++;
    }
    i++;
  }

  if (count === 2) {
    console.log(num);
  }

  num++;
}
