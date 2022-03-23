import os from 'os'

const featureMem = os.totalmem()
console.log(featureMem);

console.log(os.type());
console.log(os.userInfo());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.arch());
console.log(os.EOL);
console.log(os.platform());
console.log(os.release());
console.log(os.hostname());