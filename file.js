var fs = require("fs");

//create file

function write(filename, content) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(filename, content, function(err, done) {
            if (err) {
                reject(err)
            } else {
                resolve(done)
            }
        })
    })
}

//read file

function read(filename, cb) {
    fs.readFile(filename, "UTF-8", function(err, done) {
        if (err) {
            cb(err)
        } else {
            cb(null, done)
        }
    })
}

//rename the file
function rename(oldfile, newfile) {
    return new Promise(function(resolve, reject) {
        fs.rename(oldfile, newfile, function(err, done) {
            if (err) {
                reject(err)
            } else {
                resolve(done)
            }
        })
    })
}

//remove the file

function remove(filename) {
    return new Promise(function(resolve, reject) {
        fs.unlink(filename, function(err, done) {
            if (err) {
                reject(err)
            } else {
                resolve(done)
            }
        })
    })
}
module.exports = {
    write,
    read,
    rename,
    remove
}
