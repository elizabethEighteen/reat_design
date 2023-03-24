const babel = require('@babel/core');

const result = babel.transform("const result = 1 + 2;", {
  plugins: [require("../plugins/operation.js")],
});
const a = 1 + 2;

console.log(result.code); // const result = 3;

// let _ = require('lodash')
// console.log(_)
// console.log(babel)

// console.log(2)