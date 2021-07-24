const { F_OK } = require('constants');
const fs = require('fs'); // filesystem module

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line');

// writing files
// fs.writeFile('./docs/blog1.txt', 'hello, world', (err, data) => {
//     console.log('file was written');
// });
// fs.writeFile('./docs/blog2.txt', 'hello, again', (err, data) => {
//     console.log('file was written');
// });

// directories
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err.message);
        }
        console.log('folder created');
    });
}
else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err.message);
        }
        console.log('folder deleted');
    });
}


// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err.message);
        }
        console.log('file deleted');
    });
}