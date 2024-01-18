////////shows promises////////
const boil = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve();
    }
    return reject("Oven Broke");
  });
};

const pasta = () => {
  return new Promise((resolve, reject) => {
    if(Math.random() > 0.5) {
      return resolve()
    }
    return reject("Pasta fell on floor")
  });
};

boil()
  .then(() => pasta())
  .then(() => console.log("Sucess!"))
  .catch((error) => console.log(error));

///////// net request then
// have not installed reuests here
// let startAnimation = "aaaa"
// console.log(startAnimation);
// Request("Http")
//   .then((data) => parseData(data))
//   .catch((err) => console.log(err))
//   .finally(() => stopAnimation)