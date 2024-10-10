const person1 = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

const person2 = {
  name: "Sarah",
  age: 25,
  occupation: "Designer",
};

const person3 = {
  name: "Mike",
  age: 35,
  occupation: "Teacher",
};

const people = [person1, person2, person3];

people.forEach((person, index) => {
  console.log(`Person ${index + 1}:`);

  // Loop through the keys of each person object
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  console.log("----------------");
});
