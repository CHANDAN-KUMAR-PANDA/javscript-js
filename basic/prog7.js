//sum of all digits
var num = 564;
var a = num % 10;
var b = parseInt(num / 10);
var c = b % 10;
var fd = parseInt(b / 10);
var sum = a + c + fd;
console.log(sum);
