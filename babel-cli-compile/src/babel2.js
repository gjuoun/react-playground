const babel = require("@babel/core");

// const code = "const x: number = 42; console.log(x)";

const code = `type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "John",
  age: 25,
};

console.log(person);
`;

const result = babel.transformSync(code, {
  filename: "test.ts",
  // presets: ["@babel/preset-typescript"],
  plugins: ["@babel/plugin-transform-typescript"],
});

const transformedCode = result.code;

const vm = require("vm");

vm.runInNewContext(transformedCode);
