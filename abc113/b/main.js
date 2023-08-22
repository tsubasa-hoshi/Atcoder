var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split("\n");
    const N = parseInt(args[0], 10);
    const nums = args[1].split(' ');
    const T = parseInt(nums[0], 10);
    const A = parseInt(nums[1], 10);
    const H = args[2].split(" ").map((n) => parseInt(n, 10));
    let result = 0;
    let temperature = 10000;
    let J = 0
    for (let i = 0; i < N; i ++) {
        J = T - (H[i] * 0.006);
        if(Math.abs(A - temperature) > Math.abs(A - J)){
           result = i + 1;
           temperature = J;
        }
    }
    console.log(result);

});