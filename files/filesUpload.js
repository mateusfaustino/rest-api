const fs = require('fs')
const pathModule = require('path')

module.exports = (path, fileName,callback)=>{
    const validExtensions = ['png','jpg','jpeg']
    const fileExtension = pathModule.extname(path)
    const isExtensionValid = validExtensions.indexOf(fileExtension.substring(1)) !==-1
    const newPath=`./assets/images/${fileName}${fileExtension}`
    
    if(isExtensionValid){
        fs.createReadStream(path)
            .pipe(fs.createWriteStream(newPath))
            .on('finish',()=>callback(newPath))
    }else{
        console.log("moiô")
    }
    
}