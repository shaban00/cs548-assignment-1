// This function, asynchronousMapping, is an asynchronous function that maps an array of values to a new array of values asynchronously using an asyncMapper function.
// It takes two parameters: 'values' (the array of values to map) and 'asyncMapper' (the asynchronous mapper function).
const asynchronousMapping = async (values, asyncMapper) => {
  const result_array = []; // Initialize an empty array to store the results.

  for (const value of values) {
    // Await the result of applying the asyncMapper function to the current value.
    const result = await asyncMapper(value);
    // Push the result into the result_array.
    result_array.push(result);
  }

  return result_array;
};

// This function, testFunctionality, is an asynchronous function that demonstrates the functionality of asynchronousMapping.
const testFunctionality = async () => {
  async function asyncMapper(element) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(element * 5);
      }, 100);
    });
  }

  // Define an array of test values.
  const values = [1, 2, 3, 4, 5];
  const result_array = await asynchronousMapping(values, asyncMapper);

  console.log("Result:", result_array);
};

testFunctionality();
