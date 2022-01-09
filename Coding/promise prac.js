let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("yeahhh"), 1000);
});

promise.then(
  (result) => console.log(result),
  (error) => console.error(error)
);

new Promise((resolve, reject) => {
  setTimeout(() => resolve("ohh yeahhhh"), 2000);
})
  .then((res) => console.log(res))
  .finally(() => console.log("all done"));

// loadScript using callbacks
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// loadScript using promises
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script failed"));

    document.head.append(script);
  });
}

// consuming the promise.
let promise = loadScript("....");

promise
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

promise.then(script => console.log('other handler starting...'))


// Polyfill for promise.allSettled
if(!Promise.allSettled) {
  const rejectHandler = reason => ({status: 'rejected', reason})
  const acceptHandler = value => ({status: 'fulfilled', value})

  Promise.allSettled = function(promises) {
    // make every promise be 'resolved' so promise.all doesn't break.
    // separately add actual status before returning.
    const convertedPromises = promises.map(p => Promise.resolve(p).then(acceptHandler, rejectHandler));
    return Promise.all(convertedPromises);
  }
}