console.log("Before");
// getUser(1, user => {
//   getRepositories(user.gitHubUsername, repos => {
//     getCommits(repos[0], commits => {
//       console.log(commits);
//     });
//   });
// });

// Promise based
// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log(commits))
//   .catch(error => console.log("Error", error.message));

// Async and await
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (error) {
    console.log("Error", error.message);
  }
}

displayCommits();

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API to get repos...");
      resolve(["repo1", "repo2", "repo3"]);
      // reject(new Error('Colud not get the repos'));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API to get commits...");
      resolve(["commit"]);
    }, 2000);
  });
}
