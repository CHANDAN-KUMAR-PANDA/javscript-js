//reverse digit
var num = 564;
var a = num % 10;
var b = parseInt(num / 10);
var c = b % 10;
var fd = parseInt(b / 10);
var rev = (a * 100) + (c * 10) + fd;
console.log(rev);