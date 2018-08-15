const p = new Promise((resovle, reject) => {
  setTimeout(() => {
    // resovle(1); // pending => resolved, fulfilled
    reject(new Error("error message")); // pending => rejected
  }, 2000);
});

p
  .then(result => console.log("Result:", result))
  .catch(error => console.log('Error:', error.message));
