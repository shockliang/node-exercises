console.log("Before");

getUser(1, user => {
  console.log(user);
  
  getRepositories(user.githubUsername, repos => {
    console.log(repos);
  });
});

console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database");
    callback({ id: id, githubUsername: "shock" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(`Reading the ${username}'s repositories...`);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
