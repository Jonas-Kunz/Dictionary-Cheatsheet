function inStack() {
  let number = 1e7
  let a

  while (number--) {
    a = 1
  }
}

let obj = {}
function inHeap() {
  let number = 1e7

  while (number--) {
    obj.key = 1
  }
}

function benchmark(callback) {
  let startTime = new Date().getTime();

  callback()

  let endTime = new Date().getTime();
  let time = endTime - startTime;
  return (`Operation took ${time}ms, operations: ${time / 1e7}ms`);
}

console.log("inStack:", benchmark(inStack))
console.log("inHeap:", benchmark(inHeap))