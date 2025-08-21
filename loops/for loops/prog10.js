// prime number between 10 to 20
for (var i = 10; i <= 20; i++) {
  var count = 0;
  for (var j = 1; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(i);
  }
}
