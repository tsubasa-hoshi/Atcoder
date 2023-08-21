var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const x1 = parseInt(nums[0], 10);
    const y1 = parseInt(nums[1], 10);
    const x2 = parseInt(nums[2], 10);
    const y2 = parseInt(nums[3], 10);
    const x = x2 - x1;
    const y = y2 - y1;
    console.log((x2 - y) + " " + (y2 + x) + " " + (x1 - y) + " " + (y1 + x));
});