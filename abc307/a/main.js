var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split("\n");
    const n = parseInt(args[0], 10);
    const a = args[1].split(" ").map((n) => parseInt(n, 10));
    let weeklySteps = [];
    let sum = 0;

    for(let i = 0; i < a.length; i++) {
        sum += a[i];
        if ((i+1) % 7 === 0) {
            weeklySteps.push(sum);
            sum = 0;
        }
    }
    if (a.length % 7 !== 0) {
        weeklySteps.push(sum);
    }
    console.log(weeklySteps.join(" "));
});