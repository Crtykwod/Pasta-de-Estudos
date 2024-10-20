let promise = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) {
    resolve("success");
  }
  reject("failure");
});

console.log(promise)