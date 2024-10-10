var varVariable = "varVariable";
let letVariable = "letVariable";
const constVariable = "constVariable";

const varExample = () => {
  varVariable = "newVarVariable";
  console.log(varVariable);
};

varExample();
console.log(varVariable);

const letExample = () => {
  letVariable = "newLetVariable";
  console.log(letVariable);
};

letExample();
console.log(letVariable);

const constExample = () => {
  constVariable = "newConstVariable";
  console.log(constVariable);
};

constExample();
console.log(constVariable);
