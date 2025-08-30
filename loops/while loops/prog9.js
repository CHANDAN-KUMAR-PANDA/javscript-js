//prime or composite
let num = 17;
let i = 1;
let count = 0;

while (i <= num) {
  if (num % i === 0) {
    count++;
  }
  i++;
}

if (count === 2) {
  console.log(num + " is Prime");
} else if (num === 1) {
  console.log("1 is neither Prime nor Composite");
} else {
  console.log(num + " is Composite");
}
