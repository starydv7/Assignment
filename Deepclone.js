// Function that deep clones an object using JSON methods
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Example usage
const original = { 
  name: "Alice", 
  hobbies: ["reading", "traveling"] 
};

const clone = deepClone(original);

// Modifying the clone
clone.hobbies.push("coding");

console.log("Original:", original); // { name: "Alice", hobbies: ["reading", "traveling"] }
console.log("Clone:", clone);       // { name: "Alice", hobbies: ["reading", "traveling", "coding"] }
