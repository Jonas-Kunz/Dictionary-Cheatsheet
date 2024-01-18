const fs = require("fs");

console.log("start main thread");
/// sets timer interval on event loop to print . every 50 ms when main thread done
const intervalReference = setInterval(() => {
  process.stdout.write(`.....`);
}, 1);
//// function to be executed when file is finished reading
// looks like readfile can either output error or data and the callback runs what ever it gets
// from the readfile call
const whenDoneReading = (error, data) => {
  if (error) {
    clearInterval(intervalReference);
    console.log("error", error);
    return;
  }
  // clearinterval stops the prior interval
  clearInterval(intervalReference);
  console.log("file read successfully", data.slice(0, 50));
};
///basically read this file using this encription then output the data/error to
// the callback whenDoneReading.
fs.readFile("largeFile.txt", "utf8", whenDoneReading);

console.log("end main thread");