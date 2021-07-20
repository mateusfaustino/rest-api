const fs = require('fs')
const path = './assets/pet01.jpg'

fs.readFile(path,(error, buffer)=>{
    if(error){
        console.log("Erro");
        console.log(error);
    }else{
        console.log("Image was buffered");
        console.log(buffer);
    }
})