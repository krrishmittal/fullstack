//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let skills = ["html", "css", "js", "pw skills", "node.js", "pw skills", "mongodb"];

let firstIndex = skills.indexOf("pw skills");
let lastIndex = skills.lastIndexOf("pw skills");

console.log('The first occurrence of "pw skills" is at position ',firstIndex);
console.log('The last occurrence of "pw skills" is at position ',lastIndex);
