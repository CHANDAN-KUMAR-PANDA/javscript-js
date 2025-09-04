//prime or composite
var num = 11,
  count = 0,
  i = 1;

do {
  if (num % i === 0) {
    count++;
  }
  i++;
} while (i <= num);

if (count === 2) {
  console.log("prime num");
} else {
  console.log("not a prime num");
}
