var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const N = parseInt(nums[0], 10);
    const M = parseInt(nums[1], 10);
    const P = parseInt(nums[2], 10);
    let count = 0;
    for (let day = M; day <= N; day += P) {
        count++;
    }
    console.log(count);
});