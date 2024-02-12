// This function, asynchronousOperation, is a promise-based asynchronous operation that simulates an operation that takes 1 second to complete.
// It takes a parameter 'value' and resolves the promise after a delay of 1000 milliseconds, logging the 'value' before resolving.
const asynchronousOperation = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Result:", value);
      resolve(); // Resolve the promise after the delay.
    }, 1000);
  });
};

// This function, sequentialAsychronous, is an asynchronous function that performs asynchronous operations sequentially.
// It takes an array of 'values' as input and iterates over each value, awaiting the completion of the asynchronousOperation for each value.
const sequentialAsychronous = async (values) => {
  for (const value of values) {
    await asynchronousOperation(value);
  }
};

const test_values = [1, 2, 3, 4, 5];

// Call the sequentialAsychronous function with the test values.
sequentialAsychronous(test_values)
  .then(() => {
    console.log("Operations completed sequentially.");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
