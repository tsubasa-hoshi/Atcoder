var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const N = parseInt(nums[0], 10);
    const K = parseInt(nums[1], 10);
    let result = 0;
    for (let i = 1; i < N + 1; i++) {
        for (let k = 1; k < K + 1; k++) {
           result += i * 100 + k; 
        }
    }
    console.log(result);

});