function callbackHellFunction(callback) {
  asyncOperation1(function (result1) {
    asyncOperation2(result1, function (result2) {
      asyncOperation3(result2, function (result3) {
        asyncOperation4(result3, function (result4) {
          // Do something with the final result
          callback(result4);
        });
      });
    });
  });
}

function promiseFunction() {
  asyncOperation1()
    .then((result1) => asyncOperation2(result1))
    .then((result2) => asyncOperation3(result2))
    .then((result3) => asyncOperation4(result3))
    .then((result4) => {
      // Do something with the final result
      console.log(result4);
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
}

/**
 * Problems with callback hell
 *
 * 1. The code becomes hard to read and understand
 * 2. The code becomes difficult to maintain
 * 3. The code becomes difficult to debug
 *
 */
