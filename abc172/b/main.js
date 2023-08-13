var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    const args = input.split("\n");
    const S = args[0];
    const T = args[1];
    const Sarray = S.split("");
    const Tarray = T.split("");
    let result = 0;
    for (let i = 0; i < Sarray.length; i++) {
       if(Sarray[i] !== Tarray[i]){
          result++;
       }
    }
    console.log(result);
});