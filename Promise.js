// let promiseCleanRoom = new Promise(function(resolve, reject){
//     let cleanRoom = false;


//     if(cleanRoom){
//         resolve('clean');
//     } else {
//         reject('not clean');
//     }
// });

// promiseCleanRoom.then(function(fromResolve){
//     console.log('the room is ' + fromResolve)
// }).catch(function(fromReject){
//     console.log('the room is '+ fromReject)
// });



let cleanRoom = function(){
    return new Promise(function(resolve, reject){
        resolve('   cleaned the Room ');
    });
};


let removeGarbage = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + ' remove the garbage');
    });
};

let winIceCream = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + ' won IceCream');
    });
};

// cleanRoom().then(function(result){
//     return removeGarbage(result);
// }).then(function(result){
//     return winIceCream(result);
// }).then(function(result){
//     console.log('finished' + result);    
// })

// Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){
//     console.log('all finished')
// });

Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){
    console.log('one of them is finished')      //one of them is finished
});