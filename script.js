const output = document.querySelector("#output");
const inputEl = document.querySelector("#ip");
const startButton = document.querySelector("#btn");

startButton.addEventListener("click", () => {
  let num = Number(inputEl.value);

  // First Promise (2 sec)
  new Promise((resolve) => {
    setTimeout(() => {
      output.innerHTML = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result = result * 2;
          output.innerHTML = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result = result - 3;
          output.innerHTML = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result = result / 2;
          output.innerHTML = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result = result + 10;
          output.innerHTML = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    .catch((error) => {
      console.log(error);
    });
});
