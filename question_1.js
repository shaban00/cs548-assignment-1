// This function takes an array of promises and returns a new promise that resolves when all the promises in the input array have resolved.
const promiseAll = (promises) => {
  // Create a new promise using the Promise constructor.
  return new Promise((resolve, reject) => {
    // Initialize an array to store the resolved values of the promises.
    const results = [];
    // Initialize a counter to keep track of how many promises have resolved.
    let count = 0;

    // Iterate over each promise in the input array using the map method.
    promises.map((promise, index) => {
      promise
        .then((result) => {
          // When a promise resolves, store its resolved value in the results array at the corresponding index.
          results[index] = result;
          // Increment the count of resolved promises.
          count++;

          // If all promises have resolved (count equals the length of the input array), resolve the main promise with the results array.
          if (count === promises.length) {
            resolve(results);
          }
        })
        // If any promise in the input array fails, reject the main promise with the same error.
        .catch(reject);
    });
  });
};

const promise1 = new Promise((resolve) => {
  resolve("Result 1");
});
const promise2 = new Promise((resolve) => {
  resolve("Result 2");
});

promiseAll([promise1, promise2])
  .then((results) => {
    console.log(results); // Log the resolved values of the promises.
  })
  .catch((error) => {
    console.error(error); // Log any errors that occur during promise resolution.
  });
