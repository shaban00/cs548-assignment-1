// This function, asynchronousSleep, is an asynchronous function that simulates a delay using setTimeout.
// It takes a parameter, millis, representing the number of milliseconds to sleep for.
const asynchronousSleep = async (millis) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      // Resolve the Promise after the specified time.
      resolve();
    }, millis);
  });
};

// Get the current timestamp.
let t = Date.now();

// Call the asynchronousSleep function with a delay of 100 milliseconds.
asynchronousSleep(100).then(() => {
  console.log("Sleeping.......😴😴😴");
  console.log(Date.now() - t, "ms after sleeping.");
  console.log("Awake now......😋😋😋");
});
