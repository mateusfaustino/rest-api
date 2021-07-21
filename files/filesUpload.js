const fs = require('fs')
const pathModule = require('path')

module.exports = (path, fileName,callback)=>{
    function handleError(error){
        console.log("Error------------------------------------");
        console.log(error);
    }
    const fileExtension = pathModule.extname(path)
    const newPath=`./assets/images/${fileName}${fileExtension}`
    fs.createReadStream(path)
        .pipe(fs.createWriteStream(newPath))
        .on('finish',()=>callback(newPath))
}