// Simulate a loading screen using setInterval

let count = 0;

// Start repeating "Loading..." every 1 second
const loadingInterval = setInterval(() => {
  console.log("Loading...");
  count++;

  // Stop after 5 seconds (i.e., 5 iterations)
  if (count === 5) {
    clearInterval(loadingInterval);
    console.log("Loaded successfully!");
  }
}, 1000);
