const fs = require('fs')
const path = './assets/pet02.jpg'

module.exports = (path, fileName,callback)=>{
    function handleError(error){
        console.log("Error------------------------------------");
        console.log(error);
    }
    const newPath=`./assets/images${fileName}`
    fs.createReadStream(path)
        .pipe(fs.createWriteStream(newPath))
        .on('finish',()=>callback(newPath))
}