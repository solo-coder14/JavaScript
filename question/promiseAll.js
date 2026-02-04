function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    // Edge case: empty array
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      // Convert non-promise values to Promise
      Promise.resolve(promise)
        .then(value => {
          results[index] = value; // preserve order
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error); // reject immediately on first failure
        });
    });
  });
}


const p1 = Promise.resolve(10);
const p2 = new Promise(resolve => setTimeout(() => resolve(20), 1000));
const p3 = 30; // normal value

myPromiseAll([p1, p2, p3])
  .then(result => console.log(result)) // [10, 20, 30]
  .catch(err => console.log(err));

// const [post, comments] = await Promise.all([postPromise, commentsPromise]);