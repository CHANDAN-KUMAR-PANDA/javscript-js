//count the factor
var num = 6,
  count = 0;
for (var i = 1; i <= num; i++) {
  if (num % i === 0) {
    count++;
  }
}
console.log(count);
