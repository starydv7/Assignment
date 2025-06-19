function outerFunction() {
  const message = "Closure is working!";
  return function innerFunction() {
    console.log(message);
  };
}

const storedFunction = outerFunction(); // returns innerFunction
storedFunction(); // logs: Closure is working!
