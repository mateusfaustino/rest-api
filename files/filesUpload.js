const fs = require('fs')
const path = './assets/pet02.jpg'

function handleError(error){
    console.log("Error------------------------------------");
    console.log(error);
}
fs.createReadStream(path)
    .pipe(fs.createWriteStream('./assets/pet02-copy.jpg'))
    .on('finish',()=>console.log('all right!'))
    