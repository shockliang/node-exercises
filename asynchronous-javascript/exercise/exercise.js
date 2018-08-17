// getCustomer(1, customer => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies(movies => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });

notifyTopMovies();

async function notifyTopMovies() {
  const customer = await getCustomer(1);
  console.log("Customer: ", customer);
  const movies = customer.isGold ? await getTopMovies() : null;
  console.log("Top movies: ", movies);
  if (movies !== null) {
    await sendEmail(customer.email, movies);
    console.log("Email sent...");
  }
}

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email"
      });
    }, 2000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 2000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
