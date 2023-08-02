var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const a = parseInt(nums[0], 10);
    const b = parseInt(nums[1], 10);
    const c = parseInt(nums[2], 10);
    let small = Math.min(a, b);
    let result = Math.floor(c / small);
    console.log(result);

});