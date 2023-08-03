var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const A = parseInt(nums[0], 10);
    const B = parseInt(nums[1], 10);
    const largerNumber = Math.max(A, B);
    let result = largerNumber * 2 - 1;
    if( A == B){
        result += 1;
    }
    console.log(result);

});