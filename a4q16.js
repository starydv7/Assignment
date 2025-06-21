
function fetchUserData(callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    console.log("User data received");
    callback(); 
  }, 1000);
}

// Function to simulate fetching user posts
function fetchUserPosts(callback) {
  console.log("Fetching user posts...");
  setTimeout(() => {
    console.log("User posts received");
    callback(); 
  }, 1500); 
}

// Begin nested API calls
fetchUserData(() => {
  fetchUserPosts(() => {
    console.log("All data loaded successfully!");
  });
});
