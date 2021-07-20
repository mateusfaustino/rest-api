const fs = require('fs')
const path = './assets/pet01.jpg'

function handleError(error){
    console.log("Error------------------------------------");
    console.log(error);
}
fs.readFile(path,(error, buffer)=>{
    if(error){
        handleError(error)
    }else{
        console.log("Image was buffered");
        fs.writeFile('./assets/pet01-copy.jpg',buffer,(error)=>{
            if(error){
                handleError(error)
            }else{
                console.log("imagem copiada com sucesso!");
            }
        })
    }
})