// // Task Part
// // function that accepts another function as parameter is higher order function in JavaScript

// //task part //You can't to anything with funtion but you can only call the function //function in arg is callback function
// function takeSelfie(){
// 	console.log('selfie taken');
// }

function askMoney(amt, callback){
    // console.log('what comes in>>', callback); 
    console.log('mom told me to wait for few days till salary arrived');

    setTimeout(function(){
        // return '33333';
        // arg(5000);
        console.log('salary arrived');
       callback();     
    }, 3000);   
}   

//execution part
console.log('i want to buy bicycle');       
console.log('i don\'t have money so i asked money with parent')
 //function as an argument is callback function
askMoney(3000, function(){
console.log('Result of asked money arrived');
console.log('now i should perform all the blocking work which need money')
console.log('this block should be executed');    
});

console.log('eat food');
console.log('take bath');



// function doThing(other){
//     let x = 7;
//     // do lots of other things
//     // ...
//     other();
// }

// function hello(){
//     console.log('hello');
// }
// doThing(hello);


//Self

// function myName(hello){

// hello()
// }
// function myWord(){
//     console.log('Hello World')
// }
// myName(myWord);


// setTimeout(myWord, 2000, 'Ramsey');
// let names = ["Ram", "Shyam", "Hari"];
// names.forEach(myWord)

// function myName(hello){
// let name = 'David';
// hello(name);
// }   

// function myWord(nme){
//     console.log('Hello', nme);
// }
// myName(myWord);