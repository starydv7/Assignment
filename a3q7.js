// Function that logs person's info using 'this'
function personInfo() {
  console.log("Name:", this.name);
  console.log("Age:", this.age);
}

// Create an object with name and age
const person = {
  name: "Alice",
  age: 25
};

// Call personInfo with 'person' as its context
personInfo.call(person);
