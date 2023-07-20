function main(input) {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const a = parseInt(nums[0], 10);
    const b = parseInt(nums[1], 10);
    const result = Math.ceil(b / a);
    console.log(result);
  }
  
  main(require('fs').readFileSync('/dev/stdin', 'utf8'));