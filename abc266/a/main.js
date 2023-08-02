var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split("\n");
    const a = args[0];
    const length = a.length;
    const middleIndex = Math.floor(length / 2);
    const result =  a.charAt(middleIndex);
    console.log(result);
});