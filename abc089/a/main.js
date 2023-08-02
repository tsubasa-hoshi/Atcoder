var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split('\n');
    const n = parseInt(args, 10);
    const result = Math.floor(n / 3);
    console.log(result);

});
