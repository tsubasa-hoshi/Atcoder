var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split("\n");
    const n = parseInt(args, 10);
    let Pi = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
    let parts = Pi.split('.');
    if (parts[1].length > n) {
        parts[1] = parts[1].substring(0, n);
    }
    console.log(parts.join('.'));
});