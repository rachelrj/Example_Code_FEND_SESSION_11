// Global variable
const PI = 3.141592653589793;

// Function to calculate the circumference of a circle given its radius
function calculateCircumference(radius) {
  return 2 * PI * radius;
}

// Function to calculate the area of a circle given its radius
function calculateArea(radius) {
  return PI * radius * radius;
}

// Function to calculate the volume of a sphere given its radius
function calculateVolume(radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
}

console.log(
  `The circumference of a circle with radius 5 is ${calculateCircumference(5)}`
);
console.log(`The area of a circle with radius 5 is ${calculateArea(5)}`);
console.log(`The volume of a sphere with radius 5 is ${calculateVolume(5)}`);
