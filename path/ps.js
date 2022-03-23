import path from 'path';
import fs from 'fs'

const currentFile = path.resolve()
console.log(currentFile);

var back = path.join(currentFile,'/..')
console.log(back);
fs.promises.writeFile(back, 'Hello!')
.then(()=>{
    console.log('done');
})
.catch(console.log('wrong!!'))