// var fileOperation = require("./file")
// fileOperation.write('test.txt', 'hello ')
//     .then(function(data) {
//         console.log('success>>>', data);
//     })

// .catch(function(err){
//     console.log('err>>>', err);
// })

// fileOperation.read('text.txt', function(err,done){
// 	if (err) {
// 		return console.log('err>>', err);
// 	}
// 	console.log('done>>', done);
// });

const { write, read, rename, remove } = require("./file")

	write("Ram.txt", "My name is Ram")
	    .then(function(data) {
	        console.log("success in write>>", data);

	    })
	    .catch(function(data) {
	        console.log("error in write>>", data);
	    })
	read("Ram.txt", function(err, done) {
	    if (err) {
	        console.log("error in read>>", err);

	    } else {
	        console.log("success in read>>", done);

	}

	})
	rename("Ram.txt", "Rock.txt")
	    .then(function(data) {
	        console.log("success in rename>>", data);

	    })
	    .catch(function(data) {
	        console.log("error in rename>>", data);
	    })
	remove("Rock.txt")
	    .then(function(data) {
	        console.log("success in remove>>", data);

	    })
	    .catch(function(data) {
	        console.log("error in remove>>", data);
	    })