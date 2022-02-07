'use strict'
const nuber = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= nuber; i++) {
  sum = sum + i;
}
console.log(sum);