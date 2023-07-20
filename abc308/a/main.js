var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    let numbers = nums.map(str => parseInt(str, 10));
    let isMonotonic = true;
    let isWithinRange = true;
    let isMultipleOf25 = true;

    for(let i = 0; i < numbers.length - 1; i++){
        if(numbers[i] > numbers[i + 1]){
            isMonotonic = false;
            break;
        }
    }
  
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 100 || numbers[i] > 675){
            isWithinRange = false;
        }
        if(numbers[i] % 25 !== 0){
            isMultipleOf25 = false;
        }
    }

    if(isMonotonic && isWithinRange && isMultipleOf25){
        console.log("Yes");
    } else {
        console.log("No");
    }

});