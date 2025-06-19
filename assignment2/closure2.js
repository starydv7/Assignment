function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count += 1;
      return count;
    },
    getCount: function () {
      return count;
    }
  };
}

// Create a counter instance
const counter = createCounter();

// These lines print output to console
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.getCount());  
