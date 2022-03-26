const fs = require("fs");
let text = fs.readFileSync("main.txt","utf-8");
text = text.replace("browser","Kunal");

console.log("The content of the file is");
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("kunal.txt",text);