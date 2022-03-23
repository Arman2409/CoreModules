import path, { basename } from 'path';

// resolve 
const current = path.resolve()

console.log(current);

// join 
const currentFile = path.join(path.resolve(), "index.js")

console.log(currentFile);

var het = path.join(currentFile,'/..')
console.log(het);

// basename 
const base = path.basename(currentFile)
console.log(base);

// normalize ? 
var normalFile = path.normalize(currentFile)
console.log(normalFile);
