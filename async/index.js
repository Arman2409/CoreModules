import async from 'async';

const sequence = [];

Print('starting...')

function first(callback) {

    callback(null, "hello");

}

function second(callback) {

    callback(null, "world");

}

function third(callback) { 

    callback(null, "hello");

}

sequence.push (first, second, third);

async.parallel(sequence, function(err, result) {
    if (err) {
        console.log("ERROR: ", err);
    } else {
        console.log("RESULT: ", result);
    }
})