// import * as babel from "@babel/core";
const babel = require("@babel/parser");

// const code = 'function add(a, b) { return a + b; } add(1,3)';

// // write me a typescript code
// const code = `type Person = {
//   name: string;
//   age: number;
// };

// const person: Person = {
//   name: "John",
//   age: 25,
// };

// console.log(person);
// `;

// const ast = babel.parse(code, {
//   plugins: ["typescript"],
// });

const code = "const x: number = 42;";

const ast = babel.parse(code, {
  sourceType: "module",
  plugins: ["@babel/plugin-syntax-typescript"],
});

const generator = require("@babel/generator").default;

const transformedCode = generator(ast).code;

const vm = require("vm");

const output = vm.runInThisContext(transformedCode, {
  x: 1,
  y: 2,
});

console.log(output);
