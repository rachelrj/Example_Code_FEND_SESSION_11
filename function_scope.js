// Function to calculate the circumference of a circle given its radius

function calculateCircumference(radius) {
  const PI = 3.141592653589793;
  let answer = null;
  if (typeof radius === "number") {
    answer = 2 * PI * radius;
  }
  console.log(PI);
  return answer;
}

console.log(calculateCircumference(5));
console.log(PI);
