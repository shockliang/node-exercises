console.log("Before");

getUser(1, getRepositoriesFromUser);

console.log("After");

function displayCommits(commits) {
  console.log(commits);
}

function getCommitsFromRepo(repos) {
  console.log(repos);
  getCommits(repos[0], displayCommits);
}

function getRepositoriesFromUser(user) {
  console.log(user);
  getRepositories(user.githubUsername, getCommitsFromRepo);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log(`Reading the user id:${id} from a database`);
    callback({ id: id, githubUsername: "shock" });
  }, 1000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(`Reading the ${username}'s repositories...`);
    callback(["repo1", "repo2", "repo3"]);
  }, 1000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log(`get commits from ${repo}`);
    callback(["commit 1", "commit 2", "commit 3"]);
  }, 1000);
}
