var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split("\n");
    const abc = args[1].split("");
    let counter = {A:0, B:0, C:0};
    let uniqueCount = 0;
    let left = 0;
  
    for (let right = 0; right < abc.length; right++) {
      if (counter[abc[right]] === 0) {
        uniqueCount++;
      }
      counter[abc[right]]++;
  
      if (uniqueCount === 3) {
        console.log(right - left + 1);
        break;
      }
    }

});