var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split("\n").map((n) => n.split(" "));
    const n = args[0][0];
    const x = args[0][1];
    const nums = args.slice(1, args.length - 1).map((n) => parseInt(n, 10));
    const min = Math.min(...nums);
    let sum = 0;
    let result = 0;
    for (i = 0; i < n; i++){
        sum += nums[i];
        result++;
    }
    const sumnum = x - sum;
    result += Math.floor(sumnum / min);
    console.log(result);

});
