//factors of a num
var num = 12;
var i = 1;

console.log("Factors of " + num + " are:");
while (i <= num) {
  if (num % i === 0) {
    console.log(i);
  }
  i++;
}
