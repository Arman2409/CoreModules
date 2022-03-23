import events from 'events';
const eventEmitter = new events.EventEmitter

eventEmitter.on('someEvent',()=>{
    console.log('event worked');
})

eventEmitter.emit('someEvent');