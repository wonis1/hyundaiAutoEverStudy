const { env } = require('process');

let input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

const goal = input[0];
let len = Math.floor(goal/5);

console.log(Math.floor(goal/5), goal%5)
for (let i = 0; i <= len; i++) {
  
}



// 22