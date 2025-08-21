//sum of factors
var num = 6;
var sum = 0;
for (var i = 1; i <= num; i++) {
  if (num % i === 0) {
    sum += i;
  }
}
console.log(sum);
