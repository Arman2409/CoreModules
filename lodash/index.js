import lodash from 'lodash';

// arrays 

const beasts = ['lion', 'wolf', 'jaguar'];
const birds = ['eagle', 'parrot', 'hen'];

const firstBeast = lodash.first(beasts);
console.log(firstBeast);

const randomBird = lodash.sample(birds);
console.log(randomBird);

const numbers = [5,15,65,75,48,95,12,26,58];

const biggest = lodash.max(numbers)
const smallest = lodash.min(numbers);
console.log(smallest, biggest);

const forSum = [10,20,30,40,50];
const sum = lodash.sum(forSum);

console.log(sum);

const countries = ['Austria', 'Canada', 'France', 'Germany', 'United States'];

const Europe = lodash.pull(countries, 'Canada', 'United States'); 
console.log(Europe);


// functions 

const createObject = (name, value) => {
    console.log('delayed');
    return {name:value};
}

lodash.delay(createObject, 2000);

// objects 

const anyObject = {data: 'someData'};
const value = lodash.at(anyObject, 'data');
console.log(value);

let p = {age: 24, name: "Rebecca", occupation: "teacher"};

lodash.forIn(p, (value, key) => {

    console.log(`${key}: ${value}`);
})