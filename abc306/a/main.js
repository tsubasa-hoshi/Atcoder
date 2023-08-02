var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split('\n');
    const nums = args[1];
    let result = nums.split('').map(char => char + char).join('');
    console.log(result);

});