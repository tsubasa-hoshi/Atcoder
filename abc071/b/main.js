var fs = require('fs');
var input = '';
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
  const args = input.split("\n");
  const S = args[0];
  let count = 0;
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if (!S.includes(char)) {
      return console.log(char);
    }
  }
  console.log("None")

});