import util from 'util';

const user = {
    name:'Karen',
    surname:"Poghosyan",
    age:24,
    sex:"male"
}

console.log( util.isArray(user));

const anunAzganun =  util.format(user.name,user.surname)
console.log(anunAzganun);
console.log(util.format(1,"3","3"));

util.log("Hello node!")

console.log(util.inspect(console));

console.log(util.isFunction(console));
