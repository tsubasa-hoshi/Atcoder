var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split("\n");
    const a = args[0].split(' ');
    const num = parseInt(a[1], 10);
    const nums = args[1].split(" ").map((n) => parseInt(n, 10));

});