// const rejectFunction = function() {
//   console.log("YOU ARE A FAILURE");
// }

// new Promise(function (resolve, reject){
//   const value = doSomething()
//   if (thingWorked){
//       resolve(value)
//   } else if (somethingWentWrong) {
//       reject()
//   }
// })
// .then(function(value){
//   //success
//   return nextThing(value)
// })
// .catch(rejectFunction)

// new Promise(function (resolve, reject){
//   let img = document.createElement('img')
//   img.src = src
//   img.onload = resolve
//   img.onerror = reject
//   document.body.appendChild(img)
// })
// .then(console.log("AAAAAAAAAAAAAAAAA"),)
// .catch(console.log("YYYYYYYYYYYYYYYYEEEEEEEEEEEEEAAAAAAAAA"))
//function to pass first basically just sets true or false
const funky1 = function (input) {
  if (input) {
    return true;
  }
  return false;
};
/// funk 2 just console logs the relevant message
const funky2 = function (input) {
  if (input) {
    console.log("OH YEAGH BABY");
    return true;
  }
  console.log("BOOO YACKAAA");
  return false
};
// create a new promise
new Promise(function (resolve, reject) {
  // the definition just turns the funky into a variable that can be passed around
  let value = funky1(false);
  if (funky1) {
    // if passed true passes along the output of funky1
    resolve(value);
  }
  reject(value);
})
.then(function(value) {
  // THEN calls funky2 with the output of funky 1 as input
  funky2(value)
})
.catch(function(value) {
  funky2(value)
});
