const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

console.log("start")

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first} ,${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Done the task');
      }
    );
  });
});

console.log("Reading the File");
console.log("it is the best task")
