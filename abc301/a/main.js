var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const at = args[1].split(' ');
    let countA = (at.match(/A/g) || []).length;
    let countT = (at.match(/T/g) || []).length;
    
    if(countA > countT) {
      console.log('A');
    } else if(countT > countA) {
      console.log('T');
    } else {
      if(at[nums] == "T"){
        console.log('A');
      }else{
        console.log('T');
      }
    }

});