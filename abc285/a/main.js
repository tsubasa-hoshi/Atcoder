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
    const pattern1 = a * 2;
    const pattern2 = a * 2  + 1;
    if(b == pattern1){
        console.log("Yes");
    }else if(b == pattern2){
        console.log("Yes");
    }else{
        console.log("No");
    }
});