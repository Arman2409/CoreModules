import path from 'path';
import fs from 'fs';

const thisFolder = path.resolve()
console.log(thisFolder);

const thisFile = path.join(thisFolder,"index.js")
console.log(thisFile);

fs.promises.writeFile('write.js','"Hello!"')

fs.promises.readFile('write.js','utf8').then((text)=>{
   console.log(text);
})
.catch(()=>{
    console.log('error');
})