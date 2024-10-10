var varVariable = "varVariable";
let letVariable = "letVariable";
const constVariable = "constVariable";

const varExample = () => {
  var varVariable = "newVarVariable";
  console.log(varVariable);
};

varExample();
console.log(varVariable);

const letExample = () => {
  let letVariable = "newLetVariable";
  console.log(letVariable);
};

letExample();
console.log(letVariable);

const constExample = () => {
  const constVariable = "newConstVariable";
  console.log(constVariable);
};

constExample();
console.log(constVariable);
